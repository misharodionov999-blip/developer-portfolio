import { formatIndex, serviceGroups } from "../data/content.ts";

export function Services() {
  return (
    <section className="section section-band" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">02</p>
          <div>
            <h2 id="services-title">Что я могу разработать</h2>
            <p className="lede">
              Четыре направления: страница, приложение, сценарии работы с данными и запуск проекта.
            </p>
          </div>
        </div>
        <div className="service-grid">
          {serviceGroups.map((group, index) => (
            <article className="service-card reveal" key={group.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <p className="service-index">{formatIndex(index)}</p>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul>
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
