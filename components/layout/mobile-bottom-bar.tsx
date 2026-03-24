import { contact } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(28,32,26,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <ButtonLink href={contact.phoneHref} variant="secondary" className="w-full">
          Bel ons
        </ButtonLink>
        <ButtonLink href={contact.emailHref} className="w-full">
          Offerte
        </ButtonLink>
      </div>
    </div>
  );
}
