import portrait from "../assets/portrait.jpg";
import { aboutParagraphs } from "../data/content.ts";

export function About() {
  return (
    <section className="section section-soft" id="about" aria-labelledby="about-title">
      <div className="shell about-layout">
        <div className="section-heading reveal">
          <p className="eyebrow">06</p>
          <h2 id="about-title">Обо мне</h2>
        </div>
        <figure className="portrait reveal">
          <img
            src={portrait}
            alt="Михаил Родионов в домашнем офисе"
            width={1122}
            height={1402}
            decoding="async"
            loading="lazy"
          />
        </figure>
        <div className="about-copy">
          <div className="prose reveal">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
