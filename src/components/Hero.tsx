interface HeroProps {
  name: string;
  position: string;
  tagline: string;
}

export function Hero({ name, position, tagline }: HeroProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--foreground-muted)] mb-8 font-medium">
              {position}
            </p>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cases"
                className="px-6 py-3 bg-[var(--button-bg)] text-[var(--button-fg)] rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ color: 'var(--button-fg)' }}
              >
                Смотреть кейсы
              </a>
              <a
                href="https://t.me/avanesov89"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--border)] transition-colors"
              >
                Связаться
              </a>
            </div>
          </div>

          {/* Фотография */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Декоративный элемент - градиентный круг */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl transform translate-x-4 -translate-y-4"></div>
              
              {/* Рамка с закруглениями */}
              <div className="relative">
                {/* Основная рамка */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[var(--border)] shadow-2xl">
                  <img
                    src="/images/avanesov.jpg"
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
