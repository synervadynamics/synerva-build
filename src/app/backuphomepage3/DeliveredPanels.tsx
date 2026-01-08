"use client";

import type { CSSProperties } from "react";
import Script from "next/script";

export const DeliveredPanels = () => (
  <>
    <Script
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426"
      strategy="beforeInteractive"
    />
    <Script
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js"
      strategy="beforeInteractive"
    />
    <Script id="delivered-panels" strategy="afterInteractive">{`
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.getAll().forEach(t => t.kill());

      const TRAVEL_DISTANCE = 450;

      gsap.utils.toArray(".delivered-panel").forEach(section => {
        const text = section.querySelector(".gs-reveal");

        gsap.set(text, {
          autoAlpha: 1,
          clearProps: "transform"
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          end: "bottom 25%",
          onToggle: self => {
            if (!self.isActive) return;

            gsap.killTweensOf(text);

            const fromY = self.direction === 1
              ? TRAVEL_DISTANCE
              : -TRAVEL_DISTANCE;

            gsap.set(text, { y: fromY });

            gsap.to(text, {
              y: 0,
              duration: 1.6,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                gsap.set(text, { clearProps: "transform" });
              }
            });
          }
        });
      });
    `}</Script>

    <section className="delivered-wrap">
      <section
        className="delivered-panel contained"
        style={
          {
            "--bg": "url('https://files.catbox.moe/p3wb1k.png')",
            "--text-offset": "30vh"
          } as CSSProperties
        }
      >
        <div className="panel-frame">
          <div className="image-layer"></div>
          <div className="content">
            <div className="text-block gs-reveal">
              <h2>Strategic Direction</h2>
              <p>
                This work establishes clear direction before execution begins.
                Complexity is reduced until priorities, tradeoffs, and next
                actions are obvious enough to move on without hesitation.
              </p>
              <p>
                Decisions are shaped to survive real conditions, not idealized
                plans.
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
        </div>
      </section>

      <section
        className="delivered-panel contained"
        style={
          {
            "--bg": "url('https://files.catbox.moe/sa9fgc.png')",
            "--text-offset": "31vh"
          } as CSSProperties
        }
      >
        <div className="panel-frame">
          <div className="image-layer"></div>
          <div className="content">
            <div className="text-block gs-reveal">
              <h2>Integrated Execution</h2>
              <p>
                Execution is treated as a single, connected system rather than a
                set of parallel efforts.
              </p>
              <p>
                Work moves coherently across brand, content, web, and automation
                without translation or rework.
              </p>
              <p className="bridge">
                Execution is designed so decisions propagate cleanly across the
                system.
              </p>
              <ul className="quiet-list">
                <li>workflows that move together</li>
                <li>assets built to reinforce each other</li>
                <li>fewer resets and handoffs</li>
                <li>compounding forward motion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:opsz,wght@10..32,300..700&display=swap");

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #0b0c0e;
        color: #e7e7ea;
        font-family: "Space Grotesk", system-ui, sans-serif;
        line-height: 1.5;
      }

      .delivered-wrap {
        padding: 12vh 0;
      }

      .delivered-panel {
        display: flex;
        justify-content: center;
        margin: 12vh 0;
      }

      .panel-frame {
        position: relative;
        width: min(92vw, 1600px);
        height: 82vh;
        border-radius: 28px;
        overflow: hidden;
      }

      .image-layer {
        position: absolute;
        inset: 0;
        background-image: var(--bg);
        background-size: cover;
        background-position: center right;
        background-repeat: no-repeat;
      }

      .content {
        position: relative;
        z-index: 1;
        padding-top: var(--text-offset);
        padding-left: clamp(4rem, 8vw, 12rem);
        padding-right: 2rem;
      }

      .text-block {
        max-width: 42ch;
      }

      h2 {
        font-size: clamp(2.25rem, 3.4vw, 3.05rem);
        font-weight: 400;
        margin-bottom: 1.4rem;
      }

      p {
        margin-bottom: 0.9rem;
        color: #d6d7db;
      }

      .bridge {
        margin-top: 1.5rem;
        font-weight: 500;
        color: #e7e7ea;
      }

      ul {
        padding-left: 1.1rem;
        margin-top: 1.75rem;
      }

      li {
        margin-bottom: 0.35rem;
        color: #c7cad2;
      }

      .quiet-list li {
        color: #bfc3cc;
      }
    `}</style>
  </>
);
