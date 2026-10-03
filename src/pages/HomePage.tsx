import { useEffect } from "react";
import { About } from "../components/About.tsx";
import { Contacts } from "../components/Contacts.tsx";
import { Hero } from "../components/Hero.tsx";
import { Process } from "../components/Process.tsx";
import { Projects } from "../components/Projects.tsx";
import { Services } from "../components/Services.tsx";
import { site } from "../data/content.ts";

export function HomePage() {
  useEffect(() => {
    document.title = site.title;
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <About />
      <Contacts />
    </>
  );
}
