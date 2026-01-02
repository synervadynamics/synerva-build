"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type LiquidGradientProps = {
  className?: string;
};

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;

varying vec2 vUv;

float hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p *= 2.1;
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 centered = uv - 0.5;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  centered.x *= aspect;

  float t = uTime * 0.15;
  vec2 flow = vec2(sin(t * 0.7), cos(t * 0.5)) * 0.12;
  vec2 pointer = (uPointer - 0.5) * vec2(aspect, 1.0) * 0.35;

  float warp = fbm(centered * 2.2 + flow + pointer);
  vec2 warpUv = centered + vec2(warp * 0.18, warp * 0.12);

  float n1 = fbm(warpUv * 1.6 + t * 0.2);
  float n2 = fbm(warpUv * 2.4 - t * 0.15);
  float blend = smoothstep(0.15, 0.85, n1 + n2 * 0.35);

  vec3 c1 = vec3(0.08, 0.2, 0.28);
  vec3 c2 = vec3(0.12, 0.46, 0.6);
  vec3 c3 = vec3(0.93, 0.42, 0.12);

  float highlight = smoothstep(0.2, 0.9, fbm(warpUv * 3.1 + t * 0.3));
  vec3 base = mix(c1, c2, blend);
  vec3 color = mix(base, c3, highlight * 0.25);

  float vignette = smoothstep(0.95, 0.3, length(centered));
  gl_FragColor = vec4(color * vignette, 1.0);
}
`;

const staticGradientStyle = {
  background:
    "radial-gradient(circle at 20% 20%, rgba(45, 154, 189, 0.45), transparent 55%), radial-gradient(circle at 80% 30%, rgba(16, 98, 120, 0.55), transparent 60%), radial-gradient(circle at 45% 80%, rgba(255, 146, 52, 0.25), transparent 55%), linear-gradient(140deg, rgba(10, 22, 34, 0.95), rgba(6, 12, 18, 0.98))",
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const prefersCoarsePointer = () =>
  window.matchMedia("(pointer: coarse)").matches;

const LiquidGradient = ({ className }: LiquidGradientProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [useStatic, setUseStatic] = useState(true);

  useEffect(() => {
    const shouldUseStatic = prefersReducedMotion() || prefersCoarsePointer();
    setUseStatic(shouldUseStatic);
  }, []);

  useEffect(() => {
    if (useStatic) return;
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let lastTime = 0;
    let pointerTarget = new THREE.Vector2(0.5, 0.5);
    let pointer = new THREE.Vector2(0.5, 0.5);

    const resize = (width: number, height: number) => {
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        resize(entry.contentRect.width, entry.contentRect.height);
      }
    });
    resizeObserver.observe(wrapper);

    const onPointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      pointerTarget = new THREE.Vector2(
        Math.min(1, Math.max(0, x)),
        Math.min(1, Math.max(0, y)),
      );
    };

    const pointerTargetNode = wrapper.parentElement ?? wrapper;
    pointerTargetNode.addEventListener("pointermove", onPointerMove);

    const animate = (time: number) => {
      if (frameRef.current === null) return;
      const elapsed = (time - lastTime) / 1000;
      lastTime = time;
      uniforms.uTime.value += elapsed;
      pointer.lerp(pointerTarget, 0.06);
      uniforms.uPointer.value.copy(pointer);
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      pointerTargetNode.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [useStatic]);

  if (useStatic) {
    return (
      <div
        ref={wrapperRef}
        className={className}
        style={staticGradientStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={wrapperRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default LiquidGradient;
