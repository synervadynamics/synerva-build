"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import * as THREE from "three";

import imageOne from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5153.jpg";
import imageTwo from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5155.jpg";
import imageThree from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5156.jpg";
import imageFour from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_5157.jpg";
import imageFive from "../../../test-add-ons/hero-liquid-morphology-slideshow/IMG_4254.jpg";

const IMAGE_SOURCES = [
  imageOne.src,
  imageTwo.src,
  imageThree.src,
  imageFour.src,
  imageFive.src,
];

const SLIDE_HOLD_MS = 5000;
const TRANSITION_DURATION = 2.5;

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform float uProgress;
uniform vec2 uResolution;
uniform vec2 uTexture1Size;
uniform vec2 uTexture2Size;

uniform float uGlobalIntensity;
uniform float uSpeedMultiplier;
uniform float uDistortionStrength;
uniform float uColorEnhancement;

uniform float uGlassRefractionStrength;
uniform float uGlassChromaticAberration;
uniform float uGlassBubbleClarity;
uniform float uGlassEdgeGlow;
uniform float uGlassLiquidFlow;

varying vec2 vUv;

vec2 getCoverUV(vec2 uv, vec2 textureSize) {
  vec2 s = uResolution / textureSize;
  float scale = max(s.x, s.y);
  vec2 scaledSize = textureSize * scale;
  vec2 offset = (uResolution - scaledSize) * 0.5;
  return (uv * uResolution - offset) / scaledSize;
}

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x),
    mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

vec4 glassEffect(vec2 uv, float progress) {
  float glassStrength = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity;
  float chromaticAberration = 0.02 * uGlassChromaticAberration * uGlobalIntensity;
  float waveDistortion = 0.025 * uDistortionStrength;
  float clearCenterSize = 0.3 * uGlassBubbleClarity;
  float surfaceRipples = 0.004 * uDistortionStrength;
  float liquidFlow = 0.015 * uGlassLiquidFlow * uSpeedMultiplier;
  float rimLightWidth = 0.05;
  float glassEdgeWidth = 0.025;

  float brightnessPhase = smoothstep(0.8, 1.0, progress);
  float rimLightIntensity = 0.08 * (1.0 - brightnessPhase) * uGlassEdgeGlow * uGlobalIntensity;
  float glassEdgeOpacity = 0.06 * (1.0 - brightnessPhase) * uGlassEdgeGlow;

  vec2 center = vec2(0.5, 0.5);
  vec2 p = uv * uResolution;

  vec2 uv1 = getCoverUV(uv, uTexture1Size);
  vec2 uv2_base = getCoverUV(uv, uTexture2Size);

  float maxRadius = length(uResolution) * 0.85;
  float bubbleRadius = progress * maxRadius;
  vec2 sphereCenter = center * uResolution;

  float dist = length(p - sphereCenter);
  float normalizedDist = dist / max(bubbleRadius, 0.001);
  vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
  float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);

  float distanceFactor = smoothstep(clearCenterSize, 1.0, normalizedDist);
  float time = progress * 5.0 * uSpeedMultiplier;

  vec2 liquidSurface = vec2(
    smoothNoise(uv * 100.0 + time * 0.3),
    smoothNoise(uv * 100.0 + time * 0.2 + 50.0)
  ) - 0.5;
  liquidSurface *= surfaceRipples * distanceFactor;

  vec2 distortedUV = uv2_base;
  if (inside > 0.0) {
    float refractionOffset = glassStrength * pow(distanceFactor, 1.5);
    vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
    distortedUV -= flowDirection * refractionOffset;

    float wave1 = sin(normalizedDist * 22.0 - time * 3.5);
    float wave2 = sin(normalizedDist * 35.0 + time * 2.8) * 0.7;
    float wave3 = sin(normalizedDist * 50.0 - time * 4.2) * 0.5;
    float combinedWave = (wave1 + wave2 + wave3) / 3.0;

    float waveOffset = combinedWave * waveDistortion * distanceFactor;
    distortedUV -= direction * waveOffset + liquidSurface;

    vec2 flowOffset = vec2(
      sin(time + normalizedDist * 10.0),
      cos(time * 0.8 + normalizedDist * 8.0)
    ) * liquidFlow * distanceFactor * inside;
    distortedUV += flowOffset;
  }

  vec4 newImg;
  if (inside > 0.0) {
    float aberrationOffset = chromaticAberration * pow(distanceFactor, 1.2);

    vec2 uv_r = distortedUV + direction * aberrationOffset * 1.2;
    vec2 uv_g = distortedUV + direction * aberrationOffset * 0.2;
    vec2 uv_b = distortedUV - direction * aberrationOffset * 0.8;

    float r = texture2D(uTexture2, uv_r).r;
    float g = texture2D(uTexture2, uv_g).g;
    float b = texture2D(uTexture2, uv_b).b;
    newImg = vec4(r, g, b, 1.0);
  } else {
    newImg = texture2D(uTexture2, uv2_base);
  }

  if (inside > 0.0 && rimLightIntensity > 0.0) {
    float rim = smoothstep(1.0 - rimLightWidth, 1.0, normalizedDist) *
                (1.0 - smoothstep(1.0, 1.01, normalizedDist));
    newImg.rgb += rim * rimLightIntensity;

    float edge = smoothstep(1.0 - glassEdgeWidth, 1.0, normalizedDist) *
                 (1.0 - smoothstep(1.0, 1.01, normalizedDist));
    newImg.rgb = mix(newImg.rgb, vec3(1.0), edge * glassEdgeOpacity);
  }

  newImg.rgb = mix(newImg.rgb, newImg.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);

  vec4 currentImg = texture2D(uTexture1, uv1);

  if (progress > 0.95) {
    vec4 pureNewImg = texture2D(uTexture2, uv2_base);
    float endTransition = (progress - 0.95) / 0.05;
    newImg = mix(newImg, pureNewImg, endTransition);
  }

  return mix(currentImg, newImg, inside);
}

void main() {
  gl_FragColor = glassEffect(vUv, uProgress);
}
`;

export function LiquidMorphologyBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.OrthographicCamera | null = null;
    let material: THREE.ShaderMaterial | null = null;
    let mesh: THREE.Mesh | null = null;
    let animationFrame = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;
    let currentSlide = 0;
    let isTransitioning = false;
    let textures: THREE.Texture[] = [];

    const size = {
      width: 1,
      height: 1,
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      size.width = Math.max(1, Math.floor(rect.width));
      size.height = Math.max(1, Math.floor(rect.height));

      if (renderer) {
        renderer.setSize(size.width, size.height, false);
      }

      if (material) {
        material.uniforms.uResolution.value.set(size.width, size.height);
      }
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    window.addEventListener("resize", resize);

    const loadTextures = async () => {
      const loader = new THREE.TextureLoader();
      const loaded: THREE.Texture[] = [];

      for (const source of IMAGE_SOURCES) {
        const texture = await new Promise<THREE.Texture>((resolve, reject) => {
          loader.load(
            source,
            (tex) => resolve(tex),
            undefined,
            (error) => reject(error)
          );
        });
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        loaded.push(texture);
      }

      return loaded;
    };

    const startTransition = () => {
      if (!material || isTransitioning || textures.length < 2) return;
      const nextSlide = (currentSlide + 1) % textures.length;

      const currentTexture = textures[currentSlide];
      const nextTexture = textures[nextSlide];

      material.uniforms.uTexture1.value = currentTexture;
      material.uniforms.uTexture2.value = nextTexture;
      material.uniforms.uTexture1Size.value.set(
        currentTexture.image.width,
        currentTexture.image.height
      );
      material.uniforms.uTexture2Size.value.set(
        nextTexture.image.width,
        nextTexture.image.height
      );

      isTransitioning = true;

      gsap.fromTo(
        material.uniforms.uProgress,
        { value: 0 },
        {
          value: 1,
          duration: TRANSITION_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            if (!material) return;
            material.uniforms.uProgress.value = 0;
            material.uniforms.uTexture1.value = nextTexture;
            material.uniforms.uTexture1Size.value.set(
              nextTexture.image.width,
              nextTexture.image.height
            );
            currentSlide = nextSlide;
            isTransitioning = false;
            scheduleNext();
          },
        }
      );
    };

    const scheduleNext = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (cancelled || shouldReduceMotion) return;
        startTransition();
      }, SLIDE_HOLD_MS);
    };

    const render = () => {
      if (!renderer || !scene || !camera) return;
      animationFrame = window.requestAnimationFrame(render);
      renderer.render(scene, camera);
    };

    const init = async () => {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture1: { value: null },
          uTexture2: { value: null },
          uProgress: { value: 0 },
          uResolution: { value: new THREE.Vector2(size.width, size.height) },
          uTexture1Size: { value: new THREE.Vector2(1, 1) },
          uTexture2Size: { value: new THREE.Vector2(1, 1) },
          uGlobalIntensity: { value: 1.0 },
          uSpeedMultiplier: { value: 1.0 },
          uDistortionStrength: { value: 1.0 },
          uColorEnhancement: { value: 1.0 },
          uGlassRefractionStrength: { value: 1.0 },
          uGlassChromaticAberration: { value: 1.0 },
          uGlassBubbleClarity: { value: 1.0 },
          uGlassEdgeGlow: { value: 1.0 },
          uGlassLiquidFlow: { value: 1.0 },
        },
        vertexShader,
        fragmentShader,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      resize();

      try {
        textures = await loadTextures();
      } catch {
        return;
      }

      if (cancelled || !material || textures.length === 0) return;

      material.uniforms.uTexture1.value = textures[0];
      material.uniforms.uTexture2.value = textures[1] || textures[0];
      material.uniforms.uTexture1Size.value.set(
        textures[0].image.width,
        textures[0].image.height
      );
      material.uniforms.uTexture2Size.value.set(
        (textures[1] || textures[0]).image.width,
        (textures[1] || textures[0]).image.height
      );

      render();

      if (!shouldReduceMotion && textures.length > 1) {
        scheduleNext();
      }
    };

    init();

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
      gsap.killTweensOf(material?.uniforms.uProgress);
      textures.forEach((texture) => texture.dispose());
      mesh?.geometry.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_SOURCES[0]})` }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
    </div>
  );
}
