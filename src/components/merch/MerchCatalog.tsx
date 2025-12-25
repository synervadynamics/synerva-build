"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from "react";
import Image from "next/image";
import { merchV1Categories } from "@/data/merch-v1";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.2;

const focusableSelector =
  "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

type PanState = {
  x: number;
  y: number;
};

type PointerState = {
  isPanning: boolean;
  startX: number;
  startY: number;
  startPanX: number;
  startPanY: number;
};

export default function MerchCatalog() {
  const categories = merchV1Categories;
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState<PanState>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0 });

  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const pointerState = useRef<PointerState>({
    isPanning: false,
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
  });

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) ?? null,
    [activeCategoryId, categories],
  );

  const items = activeCategory?.items ?? [];
  const activeItem = items[activeIndex] ?? null;
  const isOpen = Boolean(activeCategory && activeItem);

  const closeLightbox = useCallback(() => {
    setActiveCategoryId(null);
    setActiveIndex(0);
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  const openLightbox = useCallback((categoryId: string, index: number) => {
    setActiveCategoryId(categoryId);
    setActiveIndex(index);
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((idx) => {
      if (!items.length) return idx;
      return (idx + 1) % items.length;
    });
  }, [items.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((idx) => {
      if (!items.length) return idx;
      return (idx - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const updateBaseSize = useCallback(() => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const unscaledWidth = rect.width / zoom;
    const unscaledHeight = rect.height / zoom;
    setBaseSize({ width: unscaledWidth, height: unscaledHeight });
  }, [zoom]);

  const clampPan = useCallback(
    (nextPan: PanState) => {
      if (!containerRef.current) return { x: 0, y: 0 };
      const containerRect = containerRef.current.getBoundingClientRect();
      const maxX = Math.max(
        0,
        (baseSize.width * zoom - containerRect.width) / 2,
      );
      const maxY = Math.max(
        0,
        (baseSize.height * zoom - containerRect.height) / 2,
      );

      return {
        x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
        y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
      };
    },
    [baseSize.height, baseSize.width, zoom],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      } else if (event.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
          focusableSelector,
        );
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKey);

    const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
      focusableSelector,
    );
    focusables?.[0]?.focus();

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeLightbox, isOpen, showNext, showPrev]);

  useEffect(() => {
    if (!isOpen) return;
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, [activeCategoryId, activeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      updateBaseSize();
      setPan((prev) => (zoom <= MIN_ZOOM ? { x: 0, y: 0 } : clampPan(prev)));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clampPan, isOpen, updateBaseSize, zoom]);

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? -1 : 1;
      const nextZoom = Math.min(
        MAX_ZOOM,
        Math.max(MIN_ZOOM, zoom + direction * ZOOM_STEP),
      );
      setZoom(nextZoom);
    },
    [zoom],
  );

  const handleZoomIn = useCallback(() => {
    setZoom((value) => Math.min(MAX_ZOOM, value + ZOOM_STEP));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((value) => Math.max(MIN_ZOOM, value - ZOOM_STEP));
  }, []);

  const handleZoomReset = useCallback(() => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (zoom <= MIN_ZOOM) {
      setPan({ x: 0, y: 0 });
      return;
    }
    setPan((prev) => clampPan(prev));
  }, [clampPan, zoom]);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (zoom <= MIN_ZOOM) return;
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      pointerState.current = {
        isPanning: true,
        startX: event.clientX,
        startY: event.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
      setIsDragging(true);
    },
    [pan.x, pan.y, zoom],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!pointerState.current.isPanning) return;
      const deltaX = event.clientX - pointerState.current.startX;
      const deltaY = event.clientY - pointerState.current.startY;
      const nextPan = {
        x: pointerState.current.startPanX + deltaX,
        y: pointerState.current.startPanY + deltaY,
      };
      setPan(clampPan(nextPan));
    },
    [clampPan],
  );

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!pointerState.current.isPanning) return;
      pointerState.current.isPanning = false;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      setIsDragging(false);
    },
    [],
  );

  const handleImageLoad = useCallback(() => {
    requestAnimationFrame(() => {
      updateBaseSize();
      setPan({ x: 0, y: 0 });
    });
  }, [updateBaseSize]);

  return (
    <div className="space-y-16">
      {categories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Merch category
            </p>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {category.title}
            </h3>
            <p className="text-base text-white/70 sm:text-lg">
              {category.description}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item, itemIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => openLightbox(category.id, itemIndex)}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.03] text-left shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)] transition hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.02]"
                    priority={categoryIndex === 0 && itemIndex === 0}
                  />
                </div>
                <div className="flex w-full items-center justify-between px-5 pb-5 pt-2">
                  <span className="text-sm font-semibold text-white">
                    {item.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      {isOpen && activeCategory && activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="merch-lightbox-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox backdrop"
            onClick={closeLightbox}
            tabIndex={-1}
          />
          <div ref={modalRef} className="relative z-10 w-full max-w-6xl">
            <div className="rounded-[2.5rem] border border-white/12 bg-black/70 p-6 shadow-[0_40px_140px_-90px_rgba(0,0,0,0.9)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {activeCategory.title}
                  </p>
                  <h3
                    id="merch-lightbox-title"
                    className="mt-2 text-2xl font-semibold tracking-tight"
                  >
                    {activeItem.name}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Zoom out"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomReset}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="relative mt-5">
                <div
                  ref={containerRef}
                  className={`relative flex h-[70vh] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.8)] touch-none ${
                    zoom > MIN_ZOOM
                      ? "cursor-grab active:cursor-grabbing"
                      : "cursor-default"
                  }`}
                  onWheel={handleWheel}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  <img
                    ref={imageRef}
                    src={activeItem.imageSrc}
                    alt={activeItem.alt}
                    onLoad={handleImageLoad}
                    draggable={false}
                    className="max-h-full max-w-full select-none object-contain"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                      transition: isDragging
                        ? "none"
                        : "transform 150ms ease",
                    }}
                  />

                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <button
                      type="button"
                      onClick={showPrev}
                      className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                      aria-label="Previous shirt"
                    >
                      Prev
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <button
                      type="button"
                      onClick={showNext}
                      className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white shadow hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                      aria-label="Next shirt"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                  <span>
                    {activeIndex + 1} of {items.length}
                  </span>
                  <span>Scroll wheel or buttons to zoom</span>
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                  {items.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${item.name}`}
                      aria-current={index === activeIndex}
                      className={`relative h-16 w-24 flex-none overflow-hidden rounded-xl border transition ${
                        index === activeIndex
                          ? "border-white/70 bg-white/10"
                          : "border-white/10 bg-white/5 hover:border-white/30"
                      }`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        fill
                        sizes="96px"
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
