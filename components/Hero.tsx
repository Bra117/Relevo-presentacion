"use client";

import PlayStoreSoon from "./PlayStoreSoon";
import { useLanguage, useT } from "@/lib/LanguageContext";

export default function Hero() {
  const t = useT();
  const { toggle } = useLanguage();

  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="icon" src="/icon.png" alt="Relevo icon" />
      <h1>
        {t.hero.titleLine1}
        <br />
        <span className="accent">{t.hero.titleLine2}</span>
      </h1>
      <p className="lead">{t.hero.lead}</p>
      <div className="pill-row">
        {t.hero.pills.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
        <button
          className="pill"
          onClick={toggle}
          style={{ cursor: "pointer", font: "inherit" }}
          title="Switch language / Cambiar idioma"
        >
          {t.hero.langPill}
        </button>
      </div>
      <div className="hero-cta-row">
        <a
          className="download-btn"
          href="https://relevo-api.webtrader.trade/descargar?de=presentacion"
          title={t.hero.downloadTitle}
        >
          {t.hero.downloadBtn}
          <span className="soon">{t.hero.downloadTag}</span>
        </a>
        <PlayStoreSoon />
        <a className="try-web-btn" href="https://webtrader.trade/relevo/" target="_blank" rel="noopener">
          {t.hero.webPageBtn}
        </a>
      </div>
    </section>
  );
}
