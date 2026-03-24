import { services } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ArrowRightIcon,
  RenovationIcon,
  RepairIcon,
  RoofIcon,
  ThermoIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceIcons = {
  roof: RoofIcon,
  renovation: RenovationIcon,
  repair: RepairIcon,
  insulation: ThermoIcon,
} as const;

export function ServicesSection() {
  return (
    <section id="diensten" aria-labelledby="services-title" className="section-shell bg-stone-50">
      <div className="container-shell space-y-10">
        <SectionHeading eyebrow="Diensten" title="Onze diensten" />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,32,26,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(28,32,26,0.08)] sm:p-7"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/18 text-stone-950">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div>
          <ButtonLink href="#contact" variant="ghost" className="px-0">
            Bekijk alle diensten
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
