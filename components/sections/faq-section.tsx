import { faqs } from "@/lib/site-content";
import { ChevronDownIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-shell bg-white">
      <div className="container-shell space-y-10">
        <SectionHeading eyebrow="FAQ" title="Veelgestelde vragen" />

        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5 shadow-sm transition open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-lg font-semibold tracking-tight text-stone-950">
                  {item.question}
                </span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-stone-700 transition group-open:rotate-180">
                  <ChevronDownIcon className="size-5" />
                </span>
              </summary>
              <p className="mt-4 pr-12 text-base leading-7 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
