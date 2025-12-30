import TestsBackground from "./TestsBackground.client";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestsPage() {
  return (
    <main
      className="tests-scroll"
      style={{
        position: "fixed",
        inset: 0,
        overflowY: "scroll",
      }}
    >
      <TestsBackground />

      {/* Empty space to drive scroll */}
      <section className="tests-spacer" style={{ height: "600vh" }} />
    </main>
  );
}
