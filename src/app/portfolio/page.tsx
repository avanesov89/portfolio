import type { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseCard } from "@/components/CaseCard";
import { sortCasesForPortfolio } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Портфолио — Юрий Аванесов",
  description: "Кейсы Юрия Аванесова по UX/UI и продуктовому дизайну B2B-интерфейсов.",
};

export default function PortfolioPage() {
  const cases = sortCasesForPortfolio(profileData.cases);

  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <section className="max-w-[1200px] mx-auto px-6">
          <div className="mb-8 pb-8 border-b border-[var(--border)]">
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

          <div className="mb-10 max-w-[760px]">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Портфолио</h1>
            <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
              Кейсы по продуктовым и корпоративным интерфейсам: сложные B2B-системы,
              аналитика, документооборот, HR-процессы и инженерные инструменты.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
        </section>
      </main>
      <Footer email={profileData.email} telegram={profileData.telegram} />
    </>
  );
}
