import { projects } from "@/lib/site-content";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="realisaties" aria-labelledby="projects-title" className="section-shell bg-stone-50">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Realisaties"
          title="Recente realisaties"
          description="Bekijk een selectie van uitgevoerde werken aan platte daken in Dessel en omgeving."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_14px_40px_rgba(28,32,26,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(28,32,26,0.08)]"
            >
              <ImagePlaceholder
                className="rounded-none border-0 border-b border-stone-200 p-4"
                label={`Project in ${project.location}`}
                title={project.title}
                caption="Placeholder voor een echte projectfoto van een uitgevoerd plat dak."
              />
              <div className="space-y-3 p-6">
                <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                  {project.location}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                  {project.title}
                </h3>
                <p className="text-base leading-7 text-stone-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div>
          <ButtonLink href="#contact" variant="secondary">
            Bekijk onze realisaties
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
