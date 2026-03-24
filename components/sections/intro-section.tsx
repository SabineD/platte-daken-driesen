import { SectionHeading } from "@/components/ui/section-heading";

const introPoints = [
  "Nieuwbouw en renovatie van platte daken",
  "EPDM, roofing en duurzame isolatie-opbouw",
  "Heldere communicatie en afwerking tot in detail",
] as const;

export function IntroSection() {
  return (
    <section id="over-ons" aria-labelledby="intro-title" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
          <SectionHeading
            eyebrow="Over ons"
            title="Jouw specialist voor platte daken"
            description="Platte Daken Driesen is gespecialiseerd in alles wat met platte daken te maken heeft. Vanuit Dessel werken we voor klanten in de volledige regio Kempen. Of het nu gaat om een nieuw plat dak, renovatie, herstelling of dakisolatie: wij zorgen voor degelijk vakwerk en een oplossing op maat van jouw project."
          />

          <aside className="rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(180deg,#fcfbf8_0%,#f5f2ea_100%)] p-6 shadow-[0_20px_50px_rgba(28,32,26,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
              Waar wij sterk in zijn
            </p>
            <ul className="mt-6 space-y-4">
              {introPoints.map((point, index) => (
                <li
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/80 bg-white/80 p-4"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-2 text-sm leading-6 text-stone-700">{point}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
