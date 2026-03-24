import { companyName, contact, heroHighlights } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/ui/icons";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf6_58%,#f5f2ea_100%)]"
    >
      <div className="container-shell pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-stone-300 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-700 shadow-sm">
                {companyName}
              </span>
              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl"
                >
                  Platte daken specialist in Dessel en de Kempen
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-600">
                  Op zoek naar een ervaren vakman voor een nieuw plat dak, dakrenovatie of
                  herstelling? Platte Daken Driesen staat voor duurzame oplossingen, correcte
                  uitvoering en persoonlijke service.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.emailHref} className="sm:min-w-[196px]">
                Vraag gratis offerte
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={contact.phoneHref}
                variant="secondary"
                className="sm:min-w-[164px]"
              >
                Bel ons
                <PhoneIcon className="size-4" />
              </ButtonLink>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm font-medium text-stone-700 shadow-sm"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-stone-950">
                    <CheckIcon className="size-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-[var(--color-accent)]/20 blur-3xl sm:block" />
            <div className="absolute right-4 top-0 hidden h-28 w-28 rounded-full bg-stone-300/50 blur-3xl sm:block" />
            <ImagePlaceholder
              className="min-h-[420px]"
              label="Werfsituatie / placeholder"
              title="Nieuw plat dak, renovatie of herstelling"
              caption="Gebruik hier later echte werffoto's van dakwerken, EPDM, roofing of afgewerkte platte daken om extra vertrouwen op te bouwen."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
