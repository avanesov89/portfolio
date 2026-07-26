import Link from "next/link";
import { getSortedBlogPosts } from "@/data/blog";
import { BlogPostCard } from "@/components/BlogPostCard";

export function Blog() {
  const [latestPost] = getSortedBlogPosts();

  if (!latestPost) {
    return null;
  }

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 grid gap-8 border-b border-[var(--border)] pb-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
              Экспертные статьи
            </p>
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">Блог</h2>
            <p className="max-w-[720px] text-lg leading-relaxed text-[var(--foreground-muted)]">
              Разборы о UX-архитектуре, B2B-интерфейсах, продуктовой логике и
              работе дизайнера внутри сложных команд.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <p className="m-0 text-sm leading-relaxed text-[var(--foreground-muted)]">
              Формат для материалов, которые раскрывают подход, а не просто
              фиксируют наблюдение.
            </p>
            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Все статьи
            </Link>
          </div>
        </div>

        <BlogPostCard post={latestPost} featured />
      </div>
    </section>
  );
}
