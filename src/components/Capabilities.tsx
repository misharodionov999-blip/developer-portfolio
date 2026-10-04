import { capabilityGroups, formatIndex } from "../data/content.ts";

export function Capabilities() {
  return (
    <section className="section section-soft" id="capabilities" aria-labelledby="capabilities-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">03</p>
          <div>
            <h2 id="capabilities-title">Функциональность, которую могу реализовать</h2>
            <p className="lede">
              Возможности, из которых собирается конкретный продукт: интерфейс, пользователи, данные, логика,
              интеграции и запуск.
            </p>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article className="service-card reveal" key={group.title} style={{ transitionDelay: `${index * 40}ms` }}>
              <p className="service-index">{formatIndex(index)}</p>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
