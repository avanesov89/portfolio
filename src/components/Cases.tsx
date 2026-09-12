import { CaseStudy } from "@/types";
import { CaseCard } from "./CaseCard";
import { getListedCases, sortCasesForPortfolio } from "@/lib/cases";

interface CasesProps {
  cases: CaseStudy[];
}

export function Cases({ cases }: CasesProps) {
  const sortedCases = sortCasesForPortfolio(getListedCases(cases));

  return (
    <section id="portfolio" className="pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="mb-8 text-2xl font-semibold md:mb-10 md:text-3xl">
          Кейсы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
