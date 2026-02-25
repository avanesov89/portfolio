import { Education, Certificate } from "@/types";
import { EducationSection } from "./EducationSection";
import { Certificates } from "./Certificates";

interface AdditionalInfoProps {
  education: Education[];
  certificates: Certificate[];
  hobbies: string[];
}

export function AdditionalInfo({ education, certificates, hobbies }: AdditionalInfoProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <EducationSection education={education} />
          <Certificates certificates={certificates} />
          <div>
            <h3 className="text-xl font-semibold mb-6">Увлечения</h3>
            <ul className="space-y-2">
              {hobbies.map((hobby, index) => (
                <li key={index} className="text-[var(--foreground-muted)]">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
