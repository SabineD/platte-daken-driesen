import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-stone-300 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-700 shadow-sm">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
