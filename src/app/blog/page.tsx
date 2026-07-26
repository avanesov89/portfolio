import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogPostCard } from "@/components/BlogPostCard";
import { profileData } from "@/data/profile";
import { getSortedBlogPosts } from "@/data/blog";
import { blogMetadata } from "@/lib/seo";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <section className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8 border-b border-[var(--border)] pb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              На главную
            </Link>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,760px)_320px] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                UX/UI, B2B, продуктовая логика
              </p>
              <h1 className="mb-5 text-4xl font-bold md:text-6xl">Блог</h1>
              <p className="text-xl leading-relaxed text-[var(--foreground-muted)]">
                Экспертные материалы о проектировании сложных интерфейсов:
                от архитектуры сценариев до коммуникации с командой и бизнесом.
              </p>
            </div>
            <p className="m-0 max-w-[320px] text-sm leading-relaxed text-[var(--foreground-muted)] md:justify-self-end md:text-right">
              Пока здесь тестовая статья. Формат рассчитан на полноценные
              публикации, которые раскрывают подход и профессиональную позицию.
            </p>
          </div>

          <div>
            {posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        </section>
      </main>
      <Footer email={profileData.email} telegram={profileData.telegram} />
    </>
  );
}
