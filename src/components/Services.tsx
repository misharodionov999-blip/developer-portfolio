import { formatIndex, serviceGroups } from "../data/content.ts";

export function Services() {
  return (
    <section className="section section-band" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">01</p>
          <div>
            <h2 id="services-title">Разработка под вашу задачу</h2>
            <p className="lede">
              Разрабатываю сайты, приложения, ботов, автоматизацию и интеграции. С этими задачами можно обратиться.
            </p>
          </div>
        </div>
        <div className="service-grid">
          {serviceGroups.map((group, index) => (
            <article className="service-card reveal" key={group.title} style={{ transitionDelay: `${index * 50}ms` }}>
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
