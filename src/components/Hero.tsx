import { Link } from "react-router-dom";
import { formatIndex, projects, site } from "../data/content.ts";
import { ProjectShot } from "./ProjectShot.tsx";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            {site.name} — {site.role}
          </p>
          <h1 className="hero-title">{site.headline}</h1>
          <p className="hero-lead">{site.lead}</p>
          <p className="hero-scope">{site.scope}</p>
          <div className="hero-actions">
            <Link className="button" to="/#contacts">
              Обсудить проект
            </Link>
            <Link className="button button-ghost" to="/#projects">
              Смотреть проекты
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Избранные проекты">
          <p className="eyebrow">Проекты</p>
          <div className="hero-projects">
            {projects.map((project, index) => (
              <Link className="hero-project" key={project.slug} to={`/projects/${project.slug}`}>
                <span className="hero-thumb">
                  <ProjectShot
                    cover={project.cover}
                    image={project.image}
                    title={project.title}
                    loading="eager"
                  />
                </span>
                <span>
                  <span className="project-kicker">
                    {formatIndex(index)} — {project.kind}
                  </span>
                  <strong>{project.title}</strong>
                  <span>{project.brief}</span>
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
