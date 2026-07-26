import Link from "next/link";
import { BlogPost } from "@/types";
import { formatBlogPostDate } from "@/data/blog";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <article className="group border-t border-[var(--border)] py-8 first:border-t-0">
      <Link
        href={`/blog/${post.slug}`}
        className={`grid gap-6 ${
          featured ? "md:grid-cols-[minmax(0,1fr)_320px]" : "md:grid-cols-[minmax(0,1fr)_240px]"
        }`}
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.date}>{formatBlogPostDate(post.date)}</time>
          </div>
          <h3
            className={`mb-4 max-w-[820px] font-semibold leading-tight group-hover:underline ${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {post.title}
          </h3>
          <p className="max-w-[740px] text-base leading-relaxed text-[var(--foreground-muted)]">
            {post.description}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-5 border-l-0 border-[var(--border)] text-sm text-[var(--foreground-muted)] md:border-l md:pl-6">
          <p className="m-0 text-sm leading-relaxed text-[var(--foreground)]">
            {post.thesis}
          </p>
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-wide">
              {post.readingTime}
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] border border-[var(--border)] px-2.5 py-1 text-xs leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
