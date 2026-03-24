import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  title: string;
  caption: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  title,
  caption,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[radial-gradient(circle_at_top_right,_rgba(243,189,39,0.24),_transparent_40%),linear-gradient(160deg,_#fdfbf5,_#f4f2ec_55%,_#ebe7dc)] p-4 sm:p-5",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.65)_45%,transparent_100%)]" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between rounded-[1.35rem] border border-dashed border-stone-300/80 bg-white/70 p-5 backdrop-blur-sm">
        <span className="inline-flex w-fit rounded-full border border-stone-300 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-700">
          {label}
        </span>
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3 h-24 rounded-2xl bg-stone-900" />
            <div className="col-span-2 h-24 rounded-2xl bg-[var(--color-accent)]/80" />
            <div className="col-span-2 h-16 rounded-2xl bg-stone-200" />
            <div className="col-span-3 h-16 rounded-2xl bg-stone-300" />
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_10px_30px_rgba(28,32,26,0.08)]">
            <p className="text-sm font-semibold text-stone-900">{title}</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
