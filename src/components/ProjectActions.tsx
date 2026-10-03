import { Link } from "react-router-dom";
import type { Project } from "../data/content.ts";
import { ExternalLink } from "./ExternalLink.tsx";

export function ProjectActions({ project, detail = false }: { project: Project; detail?: boolean }) {
  return (
    <div className="action-row">
      {detail ? null : (
        <Link className="button" to={`/projects/${project.slug}`}>
          Подробнее
        </Link>
      )}
      <ExternalLink className="button button-ghost" href={project.liveUrl}>
        Live Demo
      </ExternalLink>
      <ExternalLink className="button button-ghost" href={project.githubUrl}>
        GitHub
      </ExternalLink>
    </div>
  );
}
