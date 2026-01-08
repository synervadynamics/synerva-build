"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gsap?: {
      registerPlugin: (plugin: unknown) => void;
      utils: { toArray: (selector: string) => Element[] };
      set: (target: Element | null, vars: Record<string, unknown>) => void;
      to: (target: Element | null, vars: Record<string, unknown>) => void;
      killTweensOf: (target: Element | null) => void;
    };
    ScrollTrigger?: {
      create: (vars: Record<string, unknown>) => void;
      getAll: () => { kill: () => void }[];
    };
  }
}

const GSAP_SRC =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426";
const SCROLL_TRIGGER_SRC =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js";

export const DeliveredPanels = () => {
  const [scriptsReady, setScriptsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.gsap && window.ScrollTrigger) {
      setScriptsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptsReady) return;

    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const TRAVEL_DISTANCE = 450;

    gsap.utils.toArray(".delivered-panel").forEach((section) => {
      const text = section.querySelector(".gs-reveal");

      gsap.set(text, {
        autoAlpha: 1,
        clearProps: "transform",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",

        onToggle: (self: { isActive: boolean; direction: number }) => {
          if (!self.isActive) return;

          gsap.killTweensOf(text);

          const fromY =
            self.direction === 1 ? TRAVEL_DISTANCE : -TRAVEL_DISTANCE;

          gsap.set(text, { y: fromY });

          gsap.to(text, {
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            overwrite: "auto",
            onComplete: () => {
              gsap.set(text, { clearProps: "transform" });
            },
          });
        },
      });
    });
  }, [scriptsReady]);

  const handleScriptLoad = () => {
    if (window.gsap && window.ScrollTrigger) {
      setScriptsReady(true);
    }
  };

  return (
    <>
      <Script src={GSAP_SRC} strategy="afterInteractive" onLoad={handleScriptLoad} />
      <Script
        src={SCROLL_TRIGGER_SRC}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <section
        className="delivered-panel"
        style={{ "--bg": "url('https://files.catbox.moe/p3wb1k.png')" } as CSSProperties}
      >
        <div className="image-layer"></div>
        <div className="content">
          <div className="text-block gs-reveal">
            <h2>Strategic Direction</h2>

            <p>
              This work establishes clear direction before execution begins.
              Complexity is reduced until priorities, tradeoffs, and next actions
              are obvious enough to move on without hesitation.
            </p>

            <p>
              Decisions are shaped to survive real conditions, not idealized plans.
            </p>

            <p className="bridge">
              Strategy here is about reducing complexity until the path forward
              becomes defensible and executable.
            </p>

            <ul className="quiet-list">
              <li>what matters versus what can be ignored</li>
              <li>where effort compounds and where it leaks</li>
              <li>tradeoffs made explicit</li>
              <li>actions that can begin immediately</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="delivered-panel"
        style={{ "--bg": "url('https://files.catbox.moe/sa9fgc.png')" } as CSSProperties}
      >
        <div className="image-layer"></div>
        <div className="content">
          <div className="text-block gs-reveal">
            <h2>Integrated Execution</h2>

            <p>
              Execution is treated as a single, connected system rather than a set
              of parallel efforts.
            </p>

            <p>
              Work moves coherently across brand, content, web, and automation
              without translation or rework.
            </p>

            <p className="bridge">
              Execution is designed so decisions propagate cleanly across the system.
            </p>

            <ul className="quiet-list">
              <li>workflows that move together</li>
              <li>assets built to reinforce each other</li>
              <li>fewer resets and handoffs</li>
              <li>compounding forward motion</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="delivered-panel"
        style={{ "--bg": "url('https://files.catbox.moe/ggb49t.png')" } as CSSProperties}
      >
        <div className="image-layer"></div>
        <div className="content">
          <div className="text-block gs-reveal">
            <h2>Durable Assets</h2>

            <p>
              The work produces assets you continue to use. These are not summaries
              or presentations, but tools that clarify thinking and support decisions
              long after delivery.
            </p>

            <p className="bridge">Value accumulates instead of expiring.</p>

            <p>Every engagement leaves behind usable systems and language.</p>

            <ul>
              <li>reusable frameworks</li>
              <li>stable decision language</li>
              <li>systems that retain value</li>
              <li>less dependence on outside interpretation</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="delivered-panel"
        style={{ "--bg": "url('https://files.catbox.moe/m5ysd0.png')" } as CSSProperties}
      >
        <div className="image-layer"></div>
        <div className="content">
          <div className="text-block gs-reveal">
            <h2>Operating Judgment</h2>

            <p>
              You engage experienced judgment without the overhead that usually
              comes with it.
            </p>

            <p>
              Work moves calmly and decisively, even when scope and stakes are real.
            </p>

            <p className="bridge">Judgment replaces coordination overhead.</p>

            <ul className="quiet-list">
              <li>fewer explanations and resets</li>
              <li>faster movement without shortcuts</li>
              <li>decisions made once</li>
              <li>composed execution under constraint</li>
            </ul>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:opsz,wght@10..32,300..700&display=swap");

        .backuphomepage3 .delivered-panel {
          position: relative;
          height: 100vh;
          background: #0b0c0e;
          overflow: hidden;
        }

        .backuphomepage3 .delivered-panel .image-layer {
          position: absolute;
          inset: 0;
          background-image: var(--bg);
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        .backuphomepage3 .delivered-panel .content {
          position: relative;
          z-index: 1;
          padding-top: 31vh;
          padding-left: clamp(4rem, 8vw, 12rem);
          padding-right: 2rem;
        }

        .backuphomepage3 .delivered-panel .text-block {
          max-width: 42ch;
        }

        .backuphomepage3 .delivered-panel h2 {
          font-size: clamp(2.25rem, 3.4vw, 3.05rem);
          font-weight: 400;
          margin-bottom: 1.4rem;
        }

        .backuphomepage3 .delivered-panel p {
          margin-bottom: 0.9rem;
          color: #d6d7db;
        }

        .backuphomepage3 .delivered-panel .bridge {
          margin-top: 1.5rem;
          font-weight: 500;
          color: #e7e7ea;
        }

        .backuphomepage3 .delivered-panel ul {
          list-style: disc;
          padding-left: 1.1rem;
          margin-top: 1.75rem;
        }

        .backuphomepage3 .delivered-panel li {
          margin-bottom: 0.35rem;
          color: #c7cad2;
        }

        .backuphomepage3 .delivered-panel .quiet-list li {
          color: #bfc3cc;
        }
      `}</style>
    </>
  );
};
