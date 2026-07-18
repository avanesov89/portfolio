import Link from "next/link";
import { CaseStudy } from "@/types";
import { withBasePath } from "@/lib/asset-path";

interface CaseCardProps {
  caseItem: CaseStudy;
}

export function CaseCard({ caseItem }: CaseCardProps) {
  const tags = caseItem.tags ?? [];

  return (
    <article className="group">
      <Link href={`/portfolio/${caseItem.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4 bg-[var(--background-elevated)]">
          <img
            src={withBasePath(caseItem.image)}
            alt={caseItem.title}
            className="w-full aspect-[3/2] object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          {tags.length > 0 && (
            <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] bg-black/70 px-2.5 py-1 text-[11px] font-medium leading-none text-white shadow-sm backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:underline">
          {caseItem.title}
        </h3>
        <p className="text-sm text-[var(--foreground-muted)] line-clamp-5">
          {caseItem.description}
        </p>
        <span className="inline-block mt-3 text-sm font-medium underline underline-offset-4">
          Подробнее
        </span>
      </Link>
    </article>
  );
}
