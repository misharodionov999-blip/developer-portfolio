import { useEffect } from "react";
import { About } from "../components/About.tsx";
import { Capabilities } from "../components/Capabilities.tsx";
import { Contacts } from "../components/Contacts.tsx";
import { Help } from "../components/Help.tsx";
import { Hero } from "../components/Hero.tsx";
import { Process } from "../components/Process.tsx";
import { Projects } from "../components/Projects.tsx";
import { Requests } from "../components/Requests.tsx";
import { Services } from "../components/Services.tsx";
import { Technologies } from "../components/Technologies.tsx";
import { site } from "../data/content.ts";

export function HomePage() {
  useEffect(() => {
    document.title = site.title;
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Capabilities />
      <Help />
      <Process />
      <About />
      <Technologies />
      <Requests />
      <Contacts />
    </>
  );
}
