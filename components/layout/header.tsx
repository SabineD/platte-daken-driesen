import Image from "next/image";

import { contact, companyName, navigationLinks } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="border-b border-stone-800 bg-stone-950 text-stone-100">
        <div className="container-shell flex min-h-11 items-center justify-between gap-4 py-2 text-sm">
          <p className="hidden text-stone-300 sm:block">
            Lokale vakman voor platte daken, renovatie en herstellingen in Dessel en de Kempen.
          </p>
          <div className="ml-auto flex items-center gap-3">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 font-medium text-white transition hover:text-[var(--color-accent)]"
            >
              <PhoneIcon className="size-4" />
              <span>{contact.phoneDisplay}</span>
            </a>
            <ButtonLink
              href={contact.emailHref}
              className="hidden px-4 py-2 text-xs sm:inline-flex"
            >
              Gratis offerte
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.webp"
            alt={`${companyName} logo`}
            width={500}
            height={362}
            className="h-12 w-auto shrink-0 sm:h-14"
            loading="eager"
          />
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
              Platte daken specialist
            </span>
            <span className="mt-1 block text-lg font-semibold tracking-tight text-stone-950 sm:text-xl">
              {companyName}
            </span>
          </span>
        </a>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.phoneHref}
            className="hidden text-sm font-semibold text-stone-700 transition hover:text-stone-950 sm:inline-flex"
          >
            Bel ons
          </a>
          <ButtonLink href="#contact" className="px-4 py-2.5">
            Offerte aanvragen
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
