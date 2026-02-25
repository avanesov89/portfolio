import Link from "next/link";
import { CaseStudy } from "@/types";

interface CaseCardProps {
  caseItem: CaseStudy;
}

export function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <article className="group">
      <Link href={`/cases/${caseItem.id}`} className="block">
        <div className="overflow-hidden rounded-lg mb-4 bg-[var(--background-elevated)]">
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full aspect-[3/2] object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:underline">
          {caseItem.title}
        </h3>
        <p className="text-sm text-[var(--foreground-muted)] line-clamp-2">
          {caseItem.description}
        </p>
        <span className="inline-block mt-3 text-sm font-medium underline underline-offset-4">
          Подробнее
        </span>
      </Link>
    </article>
  );
}
