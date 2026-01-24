type SubpageStaticBackgroundProps = {
  imageUrl: string;
  showOverlay?: boolean;
};

export default function SubpageStaticBackground({
  imageUrl,
  showOverlay = true,
}: SubpageStaticBackgroundProps) {
  const safeUrl = decodeURI(imageUrl)
    .split("/")
    .map(encodeURIComponent)
    .join("/");
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("${safeUrl}")` }}
    >
      {showOverlay ? (
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      ) : null}
    </div>
  );
}
