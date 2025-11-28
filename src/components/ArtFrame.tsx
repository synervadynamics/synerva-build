import { cn } from "@/lib/utils";

export type ArtPiece = {
  title: string;
  label: string;
  medium: string;
  description: string;
  accent: string;
  ratio?: string;
};

type ArtFrameProps = {
  piece: ArtPiece;
  className?: string;
  showDescription?: boolean;
};

export const ArtFrame = ({ piece, className, showDescription = true }: ArtFrameProps) => {
  const ratioClass = piece.ratio ?? "aspect-[4/5]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.3rem] border border-white/12 bg-gradient-to-br shadow-[0_28px_120px_-70px_rgba(0,0,0,0.82)] transition duration-500 hover:border-white/25 hover:shadow-[0_44px_150px_-70px_rgba(0,0,0,0.88)]",
        ratioClass,
        piece.accent,
        className
      )}
    >
      <div className="absolute inset-0 opacity-50 mix-blend-screen bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-50 mix-blend-color-dodge bg-[conic-gradient(at_20%_20%,rgba(255,255,255,0.08),transparent_45%,rgba(0,178,255,0.14),transparent_75%)]" />
      <div className="absolute inset-5 rounded-[1.8rem] border border-white/10" />
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
          <span>{piece.label}</span>
          <span className="text-white/60">{piece.medium}</span>
        </div>
        {showDescription ? (
          <div className="space-y-2 text-white">
            <p className="text-lg font-medium leading-tight">{piece.title}</p>
            <p className="text-sm text-white/70">{piece.description}</p>
          </div>
        ) : (
          <p className="text-lg font-medium leading-tight text-white">{piece.title}</p>
        )}
      </div>
    </div>
  );
};
