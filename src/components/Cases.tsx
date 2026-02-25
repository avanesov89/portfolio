import { CaseStudy } from "@/types";
import { CaseCard } from "./CaseCard";

interface CasesProps {
  cases: CaseStudy[];
}

export function Cases({ cases }: CasesProps) {
  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Кейсы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
