import { CaseStudy } from "@/types";
import { CaseGroups } from "./CaseGroups";

interface CasesProps {
  cases: CaseStudy[];
}

export function Cases({ cases }: CasesProps) {
  return (
    <div id="portfolio" className="pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <CaseGroups cases={cases} />
      </div>
    </div>
  );
}
