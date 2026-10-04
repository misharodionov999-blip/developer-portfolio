import { Link } from "react-router-dom";
import { navItems, site } from "../data/content.ts";

const year = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="footer">
      <div className="shell footer-bar">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="footer-role">{site.role}</p>
        </div>
        <nav className="footer-nav" aria-label="Нижняя навигация">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer-meta">© {year}. Разработка цифровых решений.</p>
      </div>
    </footer>
  );
}
