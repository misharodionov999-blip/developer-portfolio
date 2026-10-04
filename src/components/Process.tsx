import { formatIndex, processSteps } from "../data/content.ts";

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">05</p>
          <div>
            <h2 id="process-title">Как я работаю</h2>
            <p className="lede">От обсуждения задачи до публикации и дальнейшего развития.</p>
          </div>
        </div>
        <ol className="process-steps reveal">
          {processSteps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-index">{formatIndex(index)}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
