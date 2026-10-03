import type { CoverId } from "../data/content.ts";
import { ProjectCover } from "./ProjectCover.tsx";

type Props = {
  cover: CoverId;
  image: string;
  title: string;
  loading?: "eager" | "lazy";
};

const imageAlt: Record<CoverId, string> = {
  forma: "Ноутбук с сайтом архитектурной студии FORMA",
  taskflow: "Дашборд управления задачами TaskFlow",
  clientflow: "CRM-дашборд ClientFlow",
};

export function ProjectShot({ cover, image, title, loading = "lazy" }: Props) {
  return (
    <div className="shot">
      {image ? (
        <img
          src={image}
          alt={imageAlt[cover] ?? `Интерфейс проекта ${title}`}
          width={1672}
          height={941}
          decoding="async"
          loading={loading}
        />
      ) : (
        <ProjectCover cover={cover} />
      )}
    </div>
  );
}
