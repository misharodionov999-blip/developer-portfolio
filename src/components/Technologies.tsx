import { technologies } from "../data/content.ts";

export function Technologies() {
  return (
    <section className="section section-quiet" id="stack" aria-labelledby="stack-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Инструменты</p>
          <div>
            <h2 id="stack-title">Технологии</h2>
            <p className="lede">Инструменты, на которых собраны опубликованные проекты.</p>
          </div>
        </div>
        <ul className="chip-list reveal">
          {technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
