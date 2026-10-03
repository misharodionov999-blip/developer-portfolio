import { Link } from "react-router-dom";
import { formatIndex, heroFocus, projects, site } from "../data/content.ts";
import { ProjectShot } from "./ProjectShot.tsx";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Портфолио</p>
          <h1 className="hero-title">
            <span className="hero-name">{site.name}</span>{" "}
            <span className="hero-role">— {site.role}</span>
          </h1>
          <p className="hero-lead">{site.lead}</p>
          <div className="hero-actions">
            <Link className="button" to="/#projects">
              Посмотреть проекты
            </Link>
            <Link className="button button-ghost" to="/#contacts">
              Обсудить проект
            </Link>
          </div>
          <ul className="focus-list">
            {heroFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="hero-panel" aria-label="Кратко о проектах">
          <p className="eyebrow">Три формата работы</p>
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
                  <span>{project.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
