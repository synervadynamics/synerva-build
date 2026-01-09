"use client";

import type { CSSProperties } from "react";

export const DeliveredPanels = () => (
  <>
    <section className="delivered-wrap">
      <section
        className="delivered-panel contained wd-panel"
        style={
          {
            "--bg": "url('https://files.catbox.moe/p3wb1k.png')",
            "--text-offset": "0",
            "--text-justify": "center"
          } as CSSProperties
        }
      >
        <div className="panel-frame">
          <div className="image-layer"></div>
          <div className="content">
            <div className="text-block gs-reveal wd-text">
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
        className="delivered-panel contained wd-panel"
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
            <div className="text-block gs-reveal wd-text">
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

      <section
        className="delivered-panel contained wd-panel"
        style={
          {
            "--bg": "url('https://files.catbox.moe/4bhxrn.png')",
            "--text-offset": "41vh"
          } as CSSProperties
        }
      >
        <div className="panel-frame">
          <div className="image-layer"></div>
          <div className="content">
            <div className="text-block gs-reveal wd-text">
              <h2>Durable Assets</h2>
              <p>
                The work produces assets you continue to use. These are not
                summaries or presentations, but tools that clarify thinking and
                support decisions long after delivery.
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
        </div>
      </section>

      <section
        className="delivered-panel contained wd-panel"
        style={
          {
            "--bg": "url('https://files.catbox.moe/m5ysd0.png')",
            "--text-offset": "31vh"
          } as CSSProperties
        }
      >
        <div className="panel-frame">
          <div className="image-layer"></div>
          <div className="content">
            <div className="text-block gs-reveal wd-text">
              <h2>Operating Judgment</h2>
              <p>
                You engage experienced judgment without the overhead that usually
                comes with it.
              </p>
              <p>
                Work moves calmly and decisively, even when scope and stakes are
                real.
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
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: var(--text-justify, flex-start);
        padding-top: var(--text-offset);
        padding-left: clamp(2rem, 8vw, 8rem);
        padding-right: clamp(2rem, 8vw, 8rem);
      }

      .text-block {
        max-width: 520px;
        background: rgba(5, 6, 10, 0.62);
        padding: clamp(1.5rem, 3vw, 3rem);
        border-radius: 22px;
        backdrop-filter: blur(24px);
      }

      .text-block h2 {
        margin-top: 0;
        font-size: clamp(1.75rem, 2.4vw, 2.5rem);
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .text-block p {
        margin-bottom: 1rem;
      }

      .text-block ul {
        margin: 1.5rem 0 0;
        padding-left: 1.2rem;
      }

      .text-block li {
        margin-bottom: 0.5rem;
      }

      .quiet-list {
        list-style-type: "— ";
        padding-left: 1.25rem;
      }

      @media (max-width: 768px) {
        .panel-frame {
          height: auto;
          min-height: 72vh;
        }

        .content {
          padding-top: clamp(2rem, 10vw, 6rem);
        }

        .text-block {
          max-width: 100%;
        }
      }
    `}</style>
  </>
);
