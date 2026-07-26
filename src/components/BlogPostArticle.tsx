"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { BlogPost } from "@/types";
import { formatBlogPostDate } from "@/data/blog";
import { ImageModal } from "@/components/ImageModal";
import { withBasePath } from "@/lib/asset-path";

interface BlogPostArticleProps {
  post: BlogPost;
}

function renderRichText(text: string): ReactNode[] {
  return text
    .split(/(<strong>.*?<\/strong>|<a href=".*?">.*?<\/a>)/g)
    .map((part, index) => {
      const strongMatch = part.match(/^<strong>(.*?)<\/strong>$/);
      const linkMatch = part.match(/^<a href="(.*?)">(.*?)<\/a>$/);

      if (strongMatch) {
        return <strong key={index}>{strongMatch[1]}</strong>;
      }

      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[2]}
          </a>
        );
      }

      return part;
    });
}

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const modalImages = post.sections.flatMap((section) =>
    section.image ? [section.image.src] : []
  );

  const openModal = (imageSrc: string) => {
    const imageIndex = modalImages.indexOf(imageSrc);

    if (imageIndex === -1) {
      return;
    }

    setModalImageIndex(imageIndex);
    setModalOpen(true);
  };

  return (
    <main className="py-12 md:py-20">
      <article className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 border-b border-[var(--border)] pb-8">
          <Link
            href="/blog"
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
            Назад в блог
          </Link>
        </div>

        <header className="mb-14">
          <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium text-[var(--foreground-muted)] md:text-xs">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatBlogPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} чтения</span>
          </div>
          <h1 className="max-w-[980px] text-4xl font-bold leading-tight md:text-6xl">
            {post.title}
          </h1>

          <aside className="mt-8 max-w-[820px] border-l border-[var(--foreground-muted)] pl-4">
            <p className="m-0 text-base leading-relaxed text-[var(--foreground)]">
              {post.thesis}
            </p>
          </aside>
        </header>

        <div className="grid gap-10 border-t border-[var(--border)] pt-10 md:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                В материале
              </p>
              <ol className="space-y-3 text-sm leading-relaxed text-[var(--foreground-muted)]">
                {post.sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#${section.id}`}
                      className="group/nav block hover:text-[var(--foreground)]"
                    >
                      <span className="mr-2 text-[var(--foreground)]">
                        {index + 1}.
                      </span>
                      <span className="group-hover/nav:underline">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="blog-article-text">
            {post.intro && (
              <section className="mb-16">
                <div className="space-y-6">
                  {post.intro.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                </div>
              </section>
            )}
            {post.sections.map((section) => (
              <section key={section.title} id={section.id} className="mb-16">
                <h2 className="mb-6 text-2xl font-semibold">{section.title}</h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                  {section.image && (
                    <figure className="mx-auto my-8 max-w-[720px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elevated)]">
                      <button
                        type="button"
                        onClick={() => openModal(section.image?.src ?? "")}
                        className="block w-full cursor-pointer text-left transition duration-300 hover:opacity-95"
                      >
                        <img
                          src={withBasePath(section.image.src)}
                          alt={section.image.alt}
                          className="w-full"
                          loading="lazy"
                        />
                      </button>
                      {section.image.caption && (
                        <figcaption className="px-4 py-3 text-center text-sm italic leading-relaxed text-[var(--foreground-muted)]">
                          {section.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {section.bullets && (
                    <ul className="blog-list list-disc">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphsAfterBullets?.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                  {section.orderedItems && (
                    <ol className="blog-list list-decimal">
                      {section.orderedItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        <footer className="mt-14 border-t border-[var(--border)] pt-8">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
              Темы
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] border border-[var(--border)] px-2.5 py-1 text-xs font-medium leading-none text-[var(--foreground-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          >
            Вернуться ко всем статьям
          </Link>
        </footer>
      </article>

      {modalOpen && (
        <ImageModal
          images={modalImages}
          initialIndex={modalImageIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}
