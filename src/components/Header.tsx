import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, site } from "../data/content.ts";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 980px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }

    const update = () => {
      const remaining =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

      if (remaining <= 48) {
        setActive(navItems[navItems.length - 1]?.id ?? "");
        return;
      }

      const marker = window.innerHeight * 0.4;
      let current = "";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= marker) current = item.id;
      }

      setActive(current);
    };

    update();
    const settle = window.setTimeout(update, 700);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scrollend", update);
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("scroll", update);
      window.removeEventListener("scrollend", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);

  return (
    <header className={solid || open ? "header is-solid" : "header"}>
      <div className="shell header-bar">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav className="desktop-nav" aria-label="Разделы страницы">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          <span className="menu-glyph" aria-hidden="true" />
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="mobile-nav" aria-label="Мобильное меню">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
