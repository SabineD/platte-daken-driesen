import { contact } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/icons";

export function CtaSection() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="section-shell bg-stone-50">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(28,32,26,0.18)] sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Vrijblijvend contact
              </span>
              <h2 id="cta-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Een nieuw plat dak of herstelling nodig?
              </h2>
              <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                Neem vandaag nog contact op voor een vrijblijvende offerte of snelle interventie.
                We bekijken jouw project graag en geven eerlijk advies op maat.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={contact.emailHref} className="sm:min-w-[210px]">
                Offerte aanvragen
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={contact.phoneHref}
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15 sm:min-w-[210px]"
              >
                Bel ons vandaag
                <PhoneIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
