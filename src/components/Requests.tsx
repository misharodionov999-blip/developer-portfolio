import { requestItems, requestNote } from "../data/content.ts";

export function Requests() {
  return (
    <section className="section section-band" id="requests" aria-labelledby="requests-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Задачи</p>
          <div>
            <h2 id="requests-title">Можно обратиться с задачей</h2>
          </div>
        </div>
        <ul className="chip-list reveal">
          {requestItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="intake-note reveal">{requestNote}</p>
      </div>
    </section>
  );
}
