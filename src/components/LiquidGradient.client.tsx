"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type LiquidGradientProps = {
  className?: string;
  colors?: [string, string, string, string, string, string];
  speed?: number;
  intensity?: number;
  gradientSize?: number;
  gradientCount?: number;
  color1Weight?: number;
  color2Weight?: number;
  interactionStrength?: number;
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
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;
uniform float uSpeed;
uniform float uIntensity;
uniform sampler2D uTouchTexture;
uniform float uGrainIntensity;
uniform float uZoom;
uniform vec3 uDarkNavy;
uniform float uGradientSize;
uniform float uGradientCount;
uniform float uColor1Weight;
uniform float uColor2Weight;

varying vec2 vUv;

float grain(vec2 uv, float time) {
  vec2 grainUv = uv * uResolution * 0.5;
  float grainValue =
    fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
  return grainValue * 2.0 - 1.0;
}

vec3 getGradientColor(vec2 uv, float time) {
  float gradientRadius = uGradientSize;
  vec2 center1 = vec2(
    0.5 + sin(time * uSpeed * 0.4) * 0.4,
    0.5 + cos(time * uSpeed * 0.5) * 0.4
  );
  vec2 center2 = vec2(
    0.5 + cos(time * uSpeed * 0.6) * 0.5,
    0.5 + sin(time * uSpeed * 0.45) * 0.5
  );
  vec2 center3 = vec2(
    0.5 + sin(time * uSpeed * 0.35) * 0.45,
    0.5 + cos(time * uSpeed * 0.55) * 0.45
  );
  vec2 center4 = vec2(
    0.5 + cos(time * uSpeed * 0.5) * 0.4,
    0.5 + sin(time * uSpeed * 0.4) * 0.4
  );
  vec2 center5 = vec2(
    0.5 + sin(time * uSpeed * 0.7) * 0.35,
    0.5 + cos(time * uSpeed * 0.6) * 0.35
  );
  vec2 center6 = vec2(
    0.5 + cos(time * uSpeed * 0.45) * 0.5,
    0.5 + sin(time * uSpeed * 0.65) * 0.5
  );
  vec2 center7 = vec2(
    0.5 + sin(time * uSpeed * 0.55) * 0.38,
    0.5 + cos(time * uSpeed * 0.48) * 0.42
  );
  vec2 center8 = vec2(
    0.5 + cos(time * uSpeed * 0.65) * 0.36,
    0.5 + sin(time * uSpeed * 0.52) * 0.44
  );
  vec2 center9 = vec2(
    0.5 + sin(time * uSpeed * 0.42) * 0.41,
    0.5 + cos(time * uSpeed * 0.58) * 0.39
  );
  vec2 center10 = vec2(
    0.5 + cos(time * uSpeed * 0.48) * 0.37,
    0.5 + sin(time * uSpeed * 0.62) * 0.43
  );
  vec2 center11 = vec2(
    0.5 + sin(time * uSpeed * 0.68) * 0.33,
    0.5 + cos(time * uSpeed * 0.44) * 0.46
  );
  vec2 center12 = vec2(
    0.5 + cos(time * uSpeed * 0.38) * 0.39,
    0.5 + sin(time * uSpeed * 0.56) * 0.41
  );

  float dist1 = length(uv - center1);
  float dist2 = length(uv - center2);
  float dist3 = length(uv - center3);
  float dist4 = length(uv - center4);
  float dist5 = length(uv - center5);
  float dist6 = length(uv - center6);
  float dist7 = length(uv - center7);
  float dist8 = length(uv - center8);
  float dist9 = length(uv - center9);
  float dist10 = length(uv - center10);
  float dist11 = length(uv - center11);
  float dist12 = length(uv - center12);

  float influence1 = 1.0 - smoothstep(0.0, gradientRadius, dist1);
  float influence2 = 1.0 - smoothstep(0.0, gradientRadius, dist2);
  float influence3 = 1.0 - smoothstep(0.0, gradientRadius, dist3);
  float influence4 = 1.0 - smoothstep(0.0, gradientRadius, dist4);
  float influence5 = 1.0 - smoothstep(0.0, gradientRadius, dist5);
  float influence6 = 1.0 - smoothstep(0.0, gradientRadius, dist6);
  float influence7 = 1.0 - smoothstep(0.0, gradientRadius, dist7);
  float influence8 = 1.0 - smoothstep(0.0, gradientRadius, dist8);
  float influence9 = 1.0 - smoothstep(0.0, gradientRadius, dist9);
  float influence10 = 1.0 - smoothstep(0.0, gradientRadius, dist10);
  float influence11 = 1.0 - smoothstep(0.0, gradientRadius, dist11);
  float influence12 = 1.0 - smoothstep(0.0, gradientRadius, dist12);

  vec2 rotatedUv1 = uv - 0.5;
  float angle1 = time * uSpeed * 0.15;
  rotatedUv1 = vec2(
    rotatedUv1.x * cos(angle1) - rotatedUv1.y * sin(angle1),
    rotatedUv1.x * sin(angle1) + rotatedUv1.y * cos(angle1)
  );
  rotatedUv1 += 0.5;

  vec2 rotatedUv2 = uv - 0.5;
  float angle2 = -time * uSpeed * 0.12;
  rotatedUv2 = vec2(
    rotatedUv2.x * cos(angle2) - rotatedUv2.y * sin(angle2),
    rotatedUv2.x * sin(angle2) + rotatedUv2.y * cos(angle2)
  );
  rotatedUv2 += 0.5;

  float radialGradient1 = length(rotatedUv1 - 0.5);
  float radialGradient2 = length(rotatedUv2 - 0.5);
  float radialInfluence1 = 1.0 - smoothstep(0.0, 0.8, radialGradient1);
  float radialInfluence2 = 1.0 - smoothstep(0.0, 0.8, radialGradient2);

  vec3 color = vec3(0.0);
  color += uColor1 * influence1 * (0.55 + 0.45 * sin(time * uSpeed))
    * uColor1Weight;
  color += uColor2 * influence2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2))
    * uColor2Weight;
  color += uColor3 * influence3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8))
    * uColor1Weight;
  color += uColor4 * influence4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3))
    * uColor2Weight;
  color += uColor5 * influence5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1))
    * uColor1Weight;
  color += uColor6 * influence6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9))
    * uColor2Weight;

  if (uGradientCount > 6.0) {
    color += uColor1 * influence7 * (0.55 + 0.45 * sin(time * uSpeed * 1.4))
      * uColor1Weight;
    color += uColor2 * influence8 * (0.55 + 0.45 * cos(time * uSpeed * 1.5))
      * uColor2Weight;
    color += uColor3 * influence9 * (0.55 + 0.45 * sin(time * uSpeed * 1.6))
      * uColor1Weight;
    color += uColor4 * influence10 * (0.55 + 0.45 * cos(time * uSpeed * 1.7))
      * uColor2Weight;
  }

  if (uGradientCount > 10.0) {
    color += uColor5 * influence11 * (0.55 + 0.45 * sin(time * uSpeed * 1.8))
      * uColor1Weight;
    color += uColor6 * influence12 * (0.55 + 0.45 * cos(time * uSpeed * 1.9))
      * uColor2Weight;
  }

  color += mix(uColor1, uColor3, radialInfluence1) * 0.45 * uColor1Weight;
  color += mix(uColor2, uColor4, radialInfluence2) * 0.4 * uColor2Weight;

  color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luminance), color, 1.35);
  color = pow(color, vec3(0.92));

  float brightness1 = length(color);
  float mixFactor1 = max(brightness1 * 1.2, 0.15);
  color = mix(uDarkNavy, color, mixFactor1);

  float maxBrightness = 1.0;
  float brightness = length(color);
  if (brightness > maxBrightness) {
    color = color * (maxBrightness / brightness);
  }

  return color;
}

void main() {
  vec2 uv = (vUv - 0.5) / uZoom + 0.5;
  vec4 touchTex = texture2D(uTouchTexture, uv);
  float vx = -(touchTex.r * 2.0 - 1.0);
  float vy = -(touchTex.g * 2.0 - 1.0);
  float intensity = touchTex.b;
  uv.x += vx * 0.6 * intensity;
  uv.y += vy * 0.6 * intensity;

  vec2 center = vec2(0.5);
  float dist = length(uv - center);
  float ripple = sin(dist * 20.0 - uTime * 2.6) * 0.025 * intensity;
  float wave = sin(dist * 15.0 - uTime * 2.0) * 0.02 * intensity;
  uv += vec2(ripple + wave);

  vec3 color = getGradientColor(uv, uTime);
  float grainValue = grain(uv, uTime);
  color += grainValue * uGrainIntensity;

  float timeShift = uTime * 0.5;
  color.r += sin(timeShift) * 0.02;
  color.g += cos(timeShift * 1.4) * 0.02;
  color.b += sin(timeShift * 1.2) * 0.02;

  float brightness2 = length(color);
  float mixFactor2 = max(brightness2 * 1.2, 0.15);
  color = mix(uDarkNavy, color, mixFactor2);
  color = clamp(color, vec3(0.0), vec3(1.0));

  float maxBrightness = 1.0;
  float brightness = length(color);
  if (brightness > maxBrightness) {
    color = color * (maxBrightness / brightness);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

class TouchTexture {
  size = 48;
  width = this.size;
  height = this.size;
  maxAge = 48;
  radius = 0.28 * this.size;
  speed = 1 / this.maxAge;
  trail: Array<{
    x: number;
    y: number;
    age: number;
    force: number;
    vx: number;
    vy: number;
  }> = [];
  last: { x: number; y: number } | null = null;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  texture: THREE.Texture;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      throw new Error("TouchTexture context unavailable");
    }
    this.ctx = ctx;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
  }

  update() {
    this.clear();
    const speed = this.speed;
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const point = this.trail[i];
      const f = point.force * speed * (1 - point.age / this.maxAge);
      point.x += point.vx * f;
      point.y += point.vy * f;
      point.age++;
      if (point.age > this.maxAge) {
        this.trail.splice(i, 1);
      } else {
        this.drawPoint(point);
      }
    }
    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point: { x: number; y: number }, strength = 1) {
    let force = 0;
    let vx = 0;
    let vy = 0;
    const last = this.last;
    if (last) {
      const dx = point.x - last.x;
      const dy = point.y - last.y;
      if (dx === 0 && dy === 0) return;
      const dd = dx * dx + dy * dy;
      const d = Math.sqrt(dd);
      vx = dx / d;
      vy = dy / d;
      force = Math.min(dd * 22000, 2.1) * strength;
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  drawPoint(point: {
    x: number;
    y: number;
    age: number;
    force: number;
    vx: number;
    vy: number;
  }) {
    const pos = {
      x: point.x * this.width,
      y: (1 - point.y) * this.height,
    };

    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Math.sin(
        (point.age / (this.maxAge * 0.3)) * (Math.PI / 2),
      );
    } else {
      const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
      intensity = -t * (t - 2);
    }
    intensity *= point.force;

    const radius = this.radius;
    const color = `${((point.vx + 1) / 2) * 255}, ${
      ((point.vy + 1) / 2) * 255
    }, ${intensity * 255}`;
    const offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = radius * 1;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

const defaultColors: [string, string, string, string, string, string] = [
  "#F15A22",
  "#0A0E27",
  "#F15A22",
  "#0A0E27",
  "#F15A22",
  "#0A0E27",
];

const buildStaticGradient = (colors: string[]) => ({
  background: `radial-gradient(circle at 18% 22%, ${colors[0]}a6, transparent 55%), radial-gradient(circle at 78% 24%, ${colors[2]}b0, transparent 60%), radial-gradient(circle at 48% 82%, ${colors[4]}80, transparent 55%), linear-gradient(140deg, ${colors[1]}f0, ${colors[3]}f0)`,
});

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const prefersCoarsePointer = () =>
  window.matchMedia("(pointer: coarse)").matches;

const LiquidGradient = ({
  className,
  colors = defaultColors,
  speed = 1.15,
  intensity = 1.7,
  gradientSize = 0.55,
  gradientCount = 8,
  color1Weight = 0.6,
  color2Weight = 1.6,
  interactionStrength = 1.6,
}: LiquidGradientProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const uniformsRef = useRef<{
    uTime: { value: number };
    uResolution: { value: THREE.Vector2 };
    uColor1: { value: THREE.Vector3 };
    uColor2: { value: THREE.Vector3 };
    uColor3: { value: THREE.Vector3 };
    uColor4: { value: THREE.Vector3 };
    uColor5: { value: THREE.Vector3 };
    uColor6: { value: THREE.Vector3 };
    uSpeed: { value: number };
    uIntensity: { value: number };
    uTouchTexture: { value: THREE.Texture | null };
    uGrainIntensity: { value: number };
    uZoom: { value: number };
    uDarkNavy: { value: THREE.Vector3 };
    uGradientSize: { value: number };
    uGradientCount: { value: number };
    uColor1Weight: { value: number };
    uColor2Weight: { value: number };
  } | null>(null);
  const [useStatic, setUseStatic] = useState(() => {
    if (typeof window === "undefined") return true;
    return prefersReducedMotion() || prefersCoarsePointer();
  });

  const staticStyle = useMemo(() => buildStaticGradient(colors), [colors]);

  useEffect(() => {
    const uniforms = uniformsRef.current;
    if (!uniforms) return;
    const resolved = colors.map((value) => new THREE.Color(value));
    uniforms.uColor1.value.set(resolved[0].r, resolved[0].g, resolved[0].b);
    uniforms.uColor2.value.set(resolved[1].r, resolved[1].g, resolved[1].b);
    uniforms.uColor3.value.set(resolved[2].r, resolved[2].g, resolved[2].b);
    uniforms.uColor4.value.set(resolved[3].r, resolved[3].g, resolved[3].b);
    uniforms.uColor5.value.set(resolved[4].r, resolved[4].g, resolved[4].b);
    uniforms.uColor6.value.set(resolved[5].r, resolved[5].g, resolved[5].b);
    uniforms.uSpeed.value = speed;
    uniforms.uIntensity.value = intensity;
    uniforms.uGradientSize.value = gradientSize;
    uniforms.uGradientCount.value = gradientCount;
    uniforms.uColor1Weight.value = color1Weight;
    uniforms.uColor2Weight.value = color2Weight;
    uniforms.uDarkNavy.value.set(
      resolved[1].r,
      resolved[1].g,
      resolved[1].b,
    );
  }, [
    colors,
    speed,
    intensity,
    gradientSize,
    gradientCount,
    color1Weight,
    color2Weight,
  ]);

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.2));
    renderer.setClearColor(0x0a0e27, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColor1: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor2: { value: new THREE.Vector3(0.039, 0.055, 0.153) },
      uColor3: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor4: { value: new THREE.Vector3(0.039, 0.055, 0.153) },
      uColor5: { value: new THREE.Vector3(0.945, 0.353, 0.133) },
      uColor6: { value: new THREE.Vector3(0.039, 0.055, 0.153) },
      uSpeed: { value: 1.15 },
      uIntensity: { value: 1.7 },
      uTouchTexture: { value: null as THREE.Texture | null },
      uGrainIntensity: { value: 0.04 },
      uZoom: { value: 1.0 },
      uDarkNavy: { value: new THREE.Vector3(0.039, 0.055, 0.153) },
      uGradientSize: { value: 0.55 },
      uGradientCount: { value: 8.0 },
      uColor1Weight: { value: 0.6 },
      uColor2Weight: { value: 1.6 },
    };
    uniformsRef.current = uniforms;
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const touchTexture = new TouchTexture();
    uniforms.uTouchTexture.value = touchTexture.texture;

    let lastTime = 0;
    let lastRender = 0;
    let pointerActive = false;
    let pointerLastTime = 0;
    let pointerPos = { x: 0.5, y: 0.5 };

    const resize = (width: number, height: number) => {
      if (width <= 0 || height <= 0) return;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        resize(entry.contentRect.width, entry.contentRect.height);
      }
    });
    resizeObserver.observe(wrapper);
    resize(wrapper.clientWidth, wrapper.clientHeight);

    const onPointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      pointerActive = true;
      pointerLastTime = performance.now();
      pointerPos = {
        x: Math.min(1, Math.max(0, x)),
        y: Math.min(1, Math.max(0, 1 - y)),
      };
      touchTexture.addTouch(pointerPos, interactionStrength);
    };

    const pointerTargetNode = wrapper.parentElement ?? wrapper;
    pointerTargetNode.addEventListener("pointermove", onPointerMove);
    pointerTargetNode.addEventListener("pointerdown", onPointerMove);
    pointerTargetNode.addEventListener("pointerenter", onPointerMove);

    const animate = (time: number) => {
      if (frameRef.current === null) return;
      const targetFrame = 1000 / 30;
      if (time - lastRender < targetFrame) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
      const elapsed = (time - lastTime) / 1000;
      lastTime = time;
      lastRender = time;
      uniforms.uTime.value += elapsed;
      touchTexture.update();
      if (pointerActive && performance.now() - pointerLastTime < 900) {
        touchTexture.addTouch(pointerPos, interactionStrength * 0.3);
      }
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
      pointerTargetNode.removeEventListener("pointerdown", onPointerMove);
      pointerTargetNode.removeEventListener("pointerenter", onPointerMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      touchTexture.texture.dispose();
      renderer.dispose();
    };
  }, [useStatic]);

  if (useStatic) {
    return (
      <div
        ref={wrapperRef}
        className={className}
        style={staticStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={staticStyle}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default LiquidGradient;
