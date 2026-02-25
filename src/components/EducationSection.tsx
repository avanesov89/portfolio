import { Education } from "@/types";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Образование</h3>
      <div className="space-y-6">
        {education.map((item) => (
          <div key={item.id}>
            <h4 className="font-medium">{item.institution}</h4>
            <p className="text-sm text-[var(--foreground-muted)] mt-1">
              {item.specialty}
            </p>
            <span className="text-sm text-[var(--foreground-muted)]">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
