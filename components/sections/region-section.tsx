import { regions } from "@/lib/site-content";
import { MapPinIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function RegionSection() {
  return (
    <section id="werkgebied" aria-labelledby="region-title" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <SectionHeading
            eyebrow="Werkgebied"
            title="Actief in Dessel en de Kempen"
            description="Platte Daken Driesen is actief in Dessel en ruime omgeving. Wij werken regelmatig in onder andere Mol, Geel, Retie, Turnhout en andere gemeenten in de Kempen."
          />

          <div className="rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(135deg,#fbfaf6_0%,#f3ede1_100%)] p-6 shadow-[0_18px_40px_rgba(28,32,26,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-stone-950 text-[var(--color-accent)]">
                <MapPinIcon className="size-5" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-600">
                Regio&apos;s waar we vaak werken
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/80 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
