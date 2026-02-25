"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { profileData } from "@/data/profile";
import { Header } from "@/components/Header";
import { ImageModal } from "@/components/ImageModal";

interface CaseContentProps {
  id: string;
}

export function CaseContent({ id }: CaseContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const caseItem = profileData.cases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <article className="max-w-[700px] mx-auto px-6">
          {/* Кнопка назад - наверху */}
          <div className="mb-8 pb-8 border-b border-[var(--border)]">
            <Link
              href="/#cases"
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
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Назад к кейсам
            </Link>
          </div>

          {/* Название кейса */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {caseItem.title}
          </h1>

          {/* Краткое описание */}
          <p className="text-lg text-[var(--foreground-muted)] mb-12 leading-relaxed">
            {caseItem.description}
          </p>

          {/* Задача */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Задача</h2>
            <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
              {caseItem.task.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Решение */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Что было сделано</h2>
            <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
              {caseItem.solution.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Результат */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Результат</h2>
            <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
              {caseItem.result.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Галерея интерфейсов */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Галерея</h2>
            <div className="space-y-6">
              {caseItem.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openModal(index)}
                  className="block w-full overflow-hidden rounded-lg bg-[var(--background-elevated)] hover:opacity-90 transition-opacity"
                >
                  <img
                    src={image}
                    alt={`${caseItem.title} — экран ${index + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Полное описание кейса */}
          {caseItem.pdfUrl && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Полное описание кейса</h2>
              <a
                href={caseItem.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
                Открыть кейс в .pdf
              </a>
            </section>
          )}
        </article>

        {/* Модальное окно */}
        {modalOpen && (
          <ImageModal
            images={caseItem.gallery}
            initialIndex={modalImageIndex}
            onClose={() => setModalOpen(false)}
          />
        )}
      </main>
    </>
  );
}
