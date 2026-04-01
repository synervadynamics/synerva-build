import TestsPage, { metadata as testsMetadata } from "../tests/page";

export const metadata = {
  ...testsMetadata,
  robots: {
    index: false,
    follow: false,
  },
};

export default TestsPage;
