import { benefits } from "@/lib/site-content";
import { CheckIcon, ShieldIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyUsSection() {
  return (
    <section id="waarom-ons" aria-labelledby="why-us-title" className="section-shell bg-white">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Waarom kiezen voor ons"
          title="Waarom kiezen voor Platte Daken Driesen?"
          description="Omdat wij ons volledig focussen op platte daken, kunnen wij voor elk project een duurzame en doordachte oplossing aanbieden. We combineren vakkennis met een persoonlijke aanpak en duidelijke communicatie."
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <aside className="rounded-[1.75rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-[0_20px_50px_rgba(28,32,26,0.12)] sm:p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-accent)]">
              <ShieldIcon className="size-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Duidelijke aanpak, degelijk vakwerk.
            </h3>
            <p className="mt-4 text-base leading-7 text-stone-300">
              Van eerste inspectie tot oplevering: je krijgt een eerlijk voorstel, een correcte
              planning en een oplossing die technisch klopt op lange termijn.
            </p>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf7ef_100%)] p-5 shadow-sm"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-stone-950">
                  <CheckIcon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-950">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
