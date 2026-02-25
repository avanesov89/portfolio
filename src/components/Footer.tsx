interface FooterProps {
  email: string;
  telegram: string;
}

export function Footer({ email, telegram }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
          <p className="text-sm text-[var(--foreground-muted)]">
            © {currentYear} Аванесов Юрий
          </p>
        </div>
      </div>
    </footer>
  );
}
