import { Experience as ExperienceType } from "@/types";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Опыт
        </h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 pb-8 border-b border-[var(--border)] last:border-0 last:pb-0"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">
                  {item.position}
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  {item.company}
                </p>
                {item.description && (
                  <p className="text-sm text-[var(--foreground-muted)] mt-3">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="md:text-right">
                <span className="text-sm text-[var(--foreground-muted)] whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
