import { contactPlaces, formatIndex } from "../data/content.ts";
import { ExternalLink } from "./ExternalLink.tsx";

export function Contacts() {
  return (
    <section className="section contacts" id="contacts" aria-labelledby="contacts-title">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">05</p>
          <h2 id="contacts-title">Есть задача? Давайте обсудим проект.</h2>
        </div>
        <ul className="contact-places">
          {contactPlaces.map((place, index) => (
            <li className="contact-place" key={place.label}>
              <span className="eyebrow">{formatIndex(index)}</span>
              <ExternalLink className="contact-link" href={place.href}>
                <span className="contact-name">{place.label}</span>
                <span className="contact-value">{place.value}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
