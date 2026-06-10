import { CaseStudy } from "@/types";

export function sortCasesForPortfolio(cases: CaseStudy[]): CaseStudy[] {
  return [...cases].sort((a, b) => {
    if (a.slug === "hr-planner") return 1;
    if (b.slug === "hr-planner") return -1;
    return 0;
  });
}
