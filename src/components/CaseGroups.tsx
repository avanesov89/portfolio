import { CaseStudy } from "@/types";
import { getListedCases, sortCasesForPortfolio } from "@/lib/cases";
import { CaseCard } from "./CaseCard";

const groups: {
  category: CaseStudy["category"];
  title: string;
}[] = [
  { category: "product-design", title: "Продуктовый дизайн" },
  {
    category: "ai-built",
    title: "Продукты, созданные с AI",
  },
];

export function CaseGroups({ cases }: { cases: CaseStudy[] }) {
  const listedCases = sortCasesForPortfolio(getListedCases(cases));

  return (
    <div className="space-y-16 md:space-y-24">
      {groups.map((group) => {
        const groupCases = listedCases.filter(
          (caseItem) => caseItem.category === group.category
        );
        if (groupCases.length === 0) return null;

        return (
          <section key={group.category} aria-labelledby={group.category}>
            <div className="mb-8 md:mb-10">
              <h2 id={group.category} className="text-2xl font-semibold md:text-3xl">
                {group.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {groupCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
