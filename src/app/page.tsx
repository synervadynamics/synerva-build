import Homepage from "@/components/Homepage/Homepage";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.description,
  path: "/",
});

export default function Page() {
  return <Homepage />;
}
