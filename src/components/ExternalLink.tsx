import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function ExternalLink({ href, className = "", children }: Props) {
  if (!href) {
    return (
      <span className={className} data-unavailable="true" title="Публичная ссылка пока не добавлена">
        {children}
        <span className="sr-only">, публичная ссылка пока не добавлена</span>
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
