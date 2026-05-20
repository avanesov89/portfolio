"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/asset-path";

interface ImageModalProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageModal({ images, initialIndex = 0, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-auto overscroll-contain bg-black/90"
      onClick={handleBackdropClick}
    >
      {/* Кнопка закрытия */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-10 cursor-pointer p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Закрыть"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Кнопка назад */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="fixed left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-2 text-white/80 hover:text-white transition-colors md:left-4"
          aria-label="Предыдущее"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Изображение */}
      <div className="flex min-h-full items-start justify-start px-4 py-16 md:items-center md:justify-center md:p-6">
        <img
          src={withBasePath(images[currentIndex])}
          alt={`Изображение ${currentIndex + 1} из ${images.length}`}
          className="w-[960px] max-w-none object-contain md:max-h-[85vh] md:w-auto md:max-w-[90vw]"
        />
      </div>

      {/* Кнопка вперёд */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="fixed right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-2 text-white/80 hover:text-white transition-colors md:right-4"
          aria-label="Следующее"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Индикатор */}
      {images.length > 1 && (
        <div className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2 text-sm text-white/80">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
