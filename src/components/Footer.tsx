import { withBasePath } from "@/lib/asset-path";

interface FooterProps {
  email: string;
  telegram: string;
}

export function Footer({ email, telegram }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-medium mb-2">Связаться</p>
            <div className="space-y-1 text-sm text-[var(--foreground-muted)]">
              <a href={`mailto:${email}`} className="block hover:text-[var(--foreground)]">
                {email}
              </a>
              <a href={`https://t.me/${telegram.replace('@', '')}`} className="block hover:text-[var(--foreground)]">
                Telegram: {telegram}
              </a>
            </div>
          </div>
          <div className="mt-[12px] text-sm text-[var(--foreground-muted)] md:pt-8 md:text-right">
            <p className="!mb-0">© {currentYear} Аванесов Юрий</p>
            <a
              href={withBasePath("/pdfs/avanesov_ux.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--foreground)]"
            >
              Скачать резюме
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
