import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 pb-20 pt-12 sm:px-10 sm:pb-24 sm:pt-14 lg:px-16 lg:pb-24 lg:pt-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#E0DCD4] bg-white/[0.04] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
            <div className="flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                ABOUT THE FOUNDER
              </p>
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
                About the Founder
              </h2>
              <div className="space-y-4 text-base text-white/80 sm:text-lg">
                <p className="max-w-prose">
                  Synerva Dynamics was founded by Kyle Gruarin, a marketing
                  operator, business owner, and systems builder who learned
                  most of what he knows by doing things the hard way and paying
                  attention when they went wrong.
                </p>
                <p className="max-w-prose">
                  Kyle has a BA in Psychology, an MBA, and most of a Computer
                  Science degree, which he continues to complete alongside his
                  work. Over the years, he’s worked in marketing management,
                  marketing research, and business ownership roles, designing
                  strategy, analyzing behavior, and making decisions that had
                  real consequences attached. Budgets. Deadlines. Clients.
                  Mistakes. Fixes.
                </p>
                <p className="max-w-prose">
                  This was never marketing as theory. It was marketing as
                  practice. Work done with imperfect information, limited time,
                  and no room to hide behind slides. You learn quickly what
                  survives contact with reality and what doesn’t.
                </p>
                <p className="max-w-prose">
                  Before founding Synerva, Kyle also spent fifteen years in
                  bars and restaurants, working nearly every role imaginable.
                  Serving. Bartending. Managing. Cleaning up messes in real
                  time, where mistakes are immediate and recovery matters more
                  than being right. It turns out there are few better training
                  grounds for understanding people, incentives, and systems
                  under pressure. You learn how to read a room in seconds. You
                  also learn humility. Repeatedly.
                </p>
                <p className="max-w-prose">Synerva grew out of that overlap.</p>
                <p className="max-w-prose">
                  The studio focuses on building systems that compound instead
                  of constantly resetting. Visual systems. Cognitive
                  frameworks. Operational structures. Not to impress, but to
                  reduce friction, improve judgment, and make good decisions
                  easier to repeat when things are messy, fast, or unclear.
                  Especially then.
                </p>
                <p className="max-w-prose">
                  Kyle is also the author of The Rockstar Server Playbook, a
                  candid and occasionally funny field guide to performance,
                  psychology, and survival in high-pressure environments,
                  written from lived experience rather than theory.
                </p>
                <p className="max-w-prose">
                  Synerva Dynamics follows the same principle throughout:
                  respect people, design for reality, and build things that
                  still work when conditions aren’t ideal. Or quiet. Or polite.
                </p>
              </div>
            </div>

            <div className="flex w-full lg:h-full">
              <div className="flex w-full flex-col lg:h-full">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:h-full lg:p-6">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
                    <Image
                      src="/homepage-post-12-25-2025/about-the-founder.PNG"
                      alt="Portrait of Kyle Gruarin"
                      fill
                      className="h-full w-full rounded-2xl object-cover"
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
