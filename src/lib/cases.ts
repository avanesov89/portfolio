import { CaseStudy } from "@/types";

export function getListedCases(cases: CaseStudy[]): CaseStudy[] {
  return cases.filter((caseItem) => caseItem.listed !== false);
}

export function sortCasesForPortfolio(cases: CaseStudy[]): CaseStudy[] {
  const order: Record<string, number> = {
    "platinum-electro": 0,
    ead: 1,
    "hr-planner": 2,
    "body-in-numbers": 3,
    crewsplit: 4,
    "performance-evaluation": 5,
  };

  return [...cases].sort(
    (a, b) => (order[a.slug] ?? Infinity) - (order[b.slug] ?? Infinity)
  );
}
