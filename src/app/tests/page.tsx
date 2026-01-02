import TestsClient from "./TestsClient";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestsPage() {
  return <TestsClient />;
}
