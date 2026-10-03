import { useEffect } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Страница не найдена — Михаил Родионов";
  }, []);

  return (
    <section className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>Такой страницы нет</h1>
      <p>Ссылка могла устареть. Вернитесь на главную.</p>
      <Link className="button" to="/">
        На главную
      </Link>
    </section>
  );
}
