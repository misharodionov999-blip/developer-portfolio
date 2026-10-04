import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectActions } from "../components/ProjectActions.tsx";
import { ProjectShot } from "../components/ProjectShot.tsx";
import { getNextProject, getProject, site } from "../data/content.ts";
import { NotFoundPage } from "./NotFoundPage.tsx";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — ${site.name}`;
  }, [project]);

  if (!project) return <NotFoundPage />;

  const next = getNextProject(project.slug);

  return (
    <article className="case shell">
      <Link className="text-link back-link" to="/#projects">
        Все проекты
      </Link>
      <p className="eyebrow">{project.kind}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <ProjectActions project={project} detail />
      <div className="case-cover">
        <ProjectShot cover={project.cover} image={project.image} title={project.title} />
      </div>
      <div className="case-grid">
        <div className="case-story">
          <p className="field-label">Задача</p>
          <p>{project.task}</p>
          <p className="field-label">Решение</p>
          <p>{project.solution}</p>
          <p className="field-label">Реализовано</p>
          <ul className="done-list">
            {project.implemented.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <dl className="case-facts">
          <div>
            <dt>Технологии</dt>
            <dd>
              <ul className="stack-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Результат</dt>
            <dd>
              <ul className="done-list">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      {next ? (
        <Link className="case-next" to={`/projects/${next.slug}`}>
          <span className="eyebrow">Дальше</span>
          <span className="case-next-title">{next.title}</span>
        </Link>
      ) : null}
    </article>
  );
}
