import { CaseStudy } from "@/types";

export function getListedCases(cases: CaseStudy[]): CaseStudy[] {
  return cases.filter((caseItem) => caseItem.listed !== false);
}

export function sortCasesForPortfolio(cases: CaseStudy[]): CaseStudy[] {
  return [...cases].sort((a, b) => {
    if (a.slug === "hr-planner") return 1;
    if (b.slug === "hr-planner") return -1;
    return 0;
  });
}
