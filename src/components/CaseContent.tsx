"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode, useState } from "react";
import { profileData } from "@/data/profile";
import { Header } from "@/components/Header";
import { ImageModal } from "@/components/ImageModal";
import { withBasePath } from "@/lib/asset-path";

interface CaseContentProps {
  slug: string;
}

function renderStrongText(text: string): ReactNode[] {
  return text.split(/(<strong>.*?<\/strong>)/g).map((part, index) => {
    const match = part.match(/^<strong>(.*?)<\/strong>$/);

    if (match) {
      return <strong key={index}>{match[1]}</strong>;
    }

    return part;
  });
}

export function CaseContent({ slug }: CaseContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const caseItem = profileData.cases.find((c) => c.slug === slug);

  if (!caseItem) {
    notFound();
  }

  const contentImages =
    caseItem.contentSections?.flatMap((section) =>
      section.steps?.flatMap((step) => step.images?.map((image) => image.src) ?? []) ?? []
    ) ?? [];
  const modalImages = [...contentImages, ...caseItem.gallery];

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
              href="/#portfolio"
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

          {/* Вводный блок */}
          {caseItem.intro ? (
            <section className="mb-12">
              <div className="space-y-5">
                {caseItem.intro.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-[var(--foreground-muted)] leading-relaxed"
                  >
                    {renderStrongText(paragraph)}
                  </p>
                ))}
              </div>

              {caseItem.details && (
                <dl className="mt-8 grid gap-4 border-y border-[var(--border)] py-6">
                  {caseItem.details.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6"
                    >
                      <dt className="text-sm font-medium text-[var(--foreground)]">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          ) : (
            <p className="text-lg text-[var(--foreground-muted)] mb-12 leading-relaxed">
              {renderStrongText(caseItem.description)}
            </p>
          )}

          {caseItem.overview && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">О продукте</h2>
              <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
                {caseItem.overview.map((paragraph, i) => (
                  <p key={i}>{renderStrongText(paragraph)}</p>
                ))}
              </div>
            </section>
          )}

          {/* Задача */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              {caseItem.taskTitle ?? "Задача"}
            </h2>
            <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
              {caseItem.task.split('\n\n').map((paragraph, i) => (
                <p key={i}>{renderStrongText(paragraph)}</p>
              ))}
              {caseItem.taskBullets && (
                <ul className="case-list list-disc pl-5">
                  {caseItem.taskBullets.map((item) => (
                    <li key={item}>{renderStrongText(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {caseItem.contentNote && (
            <aside className="mb-12 border-l-2 border-[var(--border)] pl-4 text-sm italic leading-relaxed text-[var(--foreground-muted)]">
              {caseItem.contentNote}
            </aside>
          )}

          {caseItem.contentSections?.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
                {section.intro && <p>{renderStrongText(section.intro)}</p>}
                {section.paragraphsBefore?.map((paragraph, i) => (
                  <p key={i}>{renderStrongText(paragraph)}</p>
                ))}
                {section.bullets && (
                  <ul className="case-list list-disc pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{renderStrongText(item)}</li>
                    ))}
                  </ul>
                )}
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{renderStrongText(paragraph)}</p>
                ))}
                {section.steps && (
                  <ol className="space-y-6">
                    {section.steps.map((step, index) => (
                      <li key={step.title}>
                        <h4 className="mb-2 flex items-center gap-2 text-base font-normal leading-normal tracking-normal text-[var(--foreground)]">
                          {section.stepMarker === "none" ? null : section.stepMarker === "dot" ? (
                            <span aria-hidden="true">•</span>
                          ) : (
                            <span>{index + 1}.</span>
                          )}
                          <span>{step.title}</span>
                        </h4>
                        <div className="space-y-3">
                          {step.paragraphs.map((paragraph, i) => (
                            <p key={i}>{renderStrongText(paragraph)}</p>
                          ))}
                          {step.images?.map((image) => {
                            const imageIndex = contentImages.indexOf(image.src);

                            return (
                              <button
                                key={image.src}
                                onClick={() => openModal(imageIndex)}
                                className="block w-full cursor-pointer overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elevated)] text-left transition duration-300 hover:shadow-lg hover:opacity-95"
                              >
                                <img
                                  src={withBasePath(image.src)}
                                  alt={image.alt}
                                  className="w-full"
                                  loading="lazy"
                                />
                                {image.caption && (
                                  <span className="block px-4 py-2 text-center text-sm italic leading-relaxed text-[var(--foreground-muted)]">
                                    {image.caption}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                          {step.outcome && (
                            <p>
                              <strong>Что это дало: </strong>
                              {renderStrongText(step.outcome)}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </section>
          ))}

          {caseItem.solution && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Что было сделано</h2>
              <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
                {caseItem.solution.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{renderStrongText(paragraph)}</p>
                ))}
              </div>
            </section>
          )}

          {/* Результат */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Результат</h2>
            <div className="case-text text-[var(--foreground-muted)] leading-relaxed space-y-4">
              {caseItem.result.split('\n\n').map((paragraph, i) => (
                <p key={i}>{renderStrongText(paragraph)}</p>
              ))}
            </div>
          </section>

          {/* Галерея интерфейсов */}
          {caseItem.gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Галерея</h2>
              <div className="space-y-6">
                {caseItem.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openModal(contentImages.length + index)}
                    className="block w-full cursor-pointer overflow-hidden rounded-lg bg-[var(--background-elevated)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={withBasePath(image)}
                      alt={`${caseItem.title} — экран ${index + 1}`}
                      className="w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Полное описание кейса */}
          {caseItem.pdfUrl && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Полное описание кейса</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={withBasePath(caseItem.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-fit items-center gap-2 rounded-md px-3.5 text-sm font-medium leading-none transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: "var(--button-bg)",
                    color: "var(--button-fg)",
                  }}
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
                    className="-translate-y-px"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="m9 15 3 3 3-3"></path>
                  </svg>
                  <span className="-translate-y-px">Открыть полный кейс в PDF</span>
                </a>
                <p className="max-w-sm text-sm leading-relaxed text-[var(--foreground-muted)]">
                  PDF может загружаться дольше из-за большого количества экранов.
                </p>
              </div>
            </section>
          )}
        </article>

        {/* Модальное окно */}
        {modalOpen && (
          <ImageModal
            images={modalImages}
            initialIndex={modalImageIndex}
            onClose={() => setModalOpen(false)}
          />
        )}
      </main>
    </>
  );
}
