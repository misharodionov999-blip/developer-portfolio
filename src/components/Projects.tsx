import { Link } from "react-router-dom";
import { formatIndex, projects, projectsNote } from "../data/content.ts";
import { ProjectActions } from "./ProjectActions.tsx";
import { ProjectShot } from "./ProjectShot.tsx";

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">02</p>
          <div>
            <h2 id="projects-title">Избранные проекты</h2>
            <p className="lede">{projectsNote}</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.slug}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Link
                className="shot-link"
                to={`/projects/${project.slug}`}
                aria-label={`Подробнее о проекте ${project.title}`}
              >
                <ProjectShot cover={project.cover} image={project.image} title={project.title} />
              </Link>
              <div className="project-copy">
                <p className="project-kicker">
                  {formatIndex(index)} — {project.kind}
                </p>
                <h3>
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className="project-summary">{project.summary}</p>
                <div>
                  <p className="field-label">Задача</p>
                  <p>{project.task}</p>
                </div>
                <div>
                  <p className="field-label">Реализовано</p>
                  <ul className="done-list">
                    {project.implemented.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="field-label">Технологии</p>
                  <ul className="stack-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <ProjectActions project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
