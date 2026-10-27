export function RegistryBadge({
  text = "В реестре российского ПО",
  href,
}: {
  text?: string;
  href?: string;
}) {
  const content = (
    <>
      <svg
        width={href ? 24 : 18}
        height={href ? 24 : 18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
      </svg>
      <span className="min-w-0 text-balance">
        {text.replace(/российского ПО/g, "российского\u00a0ПО")}
      </span>
    </>
  );

  return href ? (
    <a
      className="registry-badge registry-badge-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} Открыть запись в реестре в новой вкладке`}
    >
      {content}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-auto shrink-0">
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </a>
  ) : (
    <span className="registry-badge">{content}</span>
  );
}
