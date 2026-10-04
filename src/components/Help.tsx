import { helpItems } from "../data/content.ts";

export function Help() {
  return (
    <section className="section" id="help" aria-labelledby="help-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">04</p>
          <div>
            <h2 id="help-title">Чем могу помочь</h2>
            <p className="lede">Типичные задачи. Если запрос устроен иначе, его можно обсудить отдельно.</p>
          </div>
        </div>
        <div className="help-grid">
          {helpItems.map((item) => (
            <article className="service-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
