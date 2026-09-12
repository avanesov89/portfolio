import { withBasePath } from "@/lib/asset-path";

interface HeroProps {
  name: string;
  position: string;
  tagline: string;
}

export function Hero({ name, position, tagline }: HeroProps) {
  const taglineLines = tagline.split("\n").filter(Boolean);
  const resumeUrl = withBasePath("/pdfs/avanesov_ux.pdf");

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:min-h-[430px] lg:min-h-[440px] lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.72fr)] lg:gap-14">
          {/* Текстовая часть */}
          <div className="min-w-0 max-w-[600px]">
            <h1 className="mb-5 text-4xl font-bold tracking-tight [text-wrap:balance] md:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mb-6 max-w-full break-words text-lg font-medium text-[var(--foreground-muted)] [text-wrap:balance] md:text-2xl">
              {position}
            </p>
            <p className="mb-8 max-w-full break-words text-base leading-relaxed text-[var(--foreground-muted)] [text-wrap:pretty] md:text-lg">
              {taglineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/avanesov89"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--button-bg)] text-[var(--button-fg)] rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ color: 'var(--button-fg)' }}
              >
                Связаться
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--border)] transition-colors"
              >
                Резюме
              </a>
            </div>
          </div>

          {/* Фотография */}
          <div className="hidden justify-center lg:flex lg:justify-end">
            <div className="relative">
              {/* Декоративный элемент - градиентный круг */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-2xl transform translate-x-3 -translate-y-3"></div>
              
              {/* Рамка с закруглениями */}
              <div className="relative">
                {/* Основная рамка */}
                <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-[var(--border)] shadow-2xl sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[21.5rem] xl:w-[21.5rem]">
                  <img
                    src={withBasePath("/images/avanesov.jpg")}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Декоративные элементы по углам */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-500 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
