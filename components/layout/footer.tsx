import { contact, companyName, navigationLinks } from "@/lib/site-content";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {companyName}
            </p>
            <h2 className="max-w-sm text-2xl font-semibold tracking-tight text-white">
              Platte daken, renovatie en herstellingen met een lokale en correcte aanpak.
            </h2>
            <p className="max-w-md text-sm leading-7 text-stone-300">
              Vanuit Dessel werken we voor particulieren en renovatieprojecten in de Kempen.
              We focussen volledig op platte daken, EPDM, roofing en dakisolatie.
            </p>
          </div>

          <div className="space-y-4" id="footer-contact">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <a
                href={contact.phoneHref}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <PhoneIcon className="mt-0.5 size-4 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MailIcon className="mt-0.5 size-4 shrink-0" />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-stone-300">
                <MapPinIcon className="mt-0.5 size-4 shrink-0" />
                <span>{contact.addressLabel}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Regio
            </h3>
            <p className="text-sm leading-7 text-stone-300">
              Dessel, Mol, Geel, Retie, Turnhout en andere gemeenten in de Kempen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Snelle links
            </h3>
            <nav aria-label="Footer navigatie" className="grid gap-3 text-sm text-stone-300">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="transition hover:text-white">
                Offerte aanvragen
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} {companyName}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
