import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePageReveal } from "../lib/usePageReveal.ts";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

function scrollToLocation(hash: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

  if (!hash) {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);

  if (!target) return false;

  target.scrollIntoView({ behavior, block: "start" });
  return true;
}

function samePageHash(href: string) {
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return "";
  if (url.pathname !== window.location.pathname) return "";
  return url.hash;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frame = 0;
    let attempts = 0;

    const run = () => {
      if (scrollToLocation(hash) || attempts >= 8) return;
      attempts += 1;
      frame = window.requestAnimationFrame(run);
    };

    frame = window.requestAnimationFrame(run);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = (event.target as Element | null)?.closest("a[href]");
      if (!link) return;

      const nextHash = samePageHash(link.getAttribute("href") ?? "");
      if (!nextHash || nextHash !== window.location.hash) return;

      scrollToLocation(nextHash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export function Layout() {
  usePageReveal();

  return (
    <>
      <ScrollManager />
      <a className="skip" href="#content">
        К содержанию
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
