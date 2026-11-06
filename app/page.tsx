"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Screenshots from "@/components/Screenshots";
import ProgressionDemo from "@/components/ProgressionDemo";
import FeaturesGrid from "@/components/FeaturesGrid";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import { useT } from "@/lib/LanguageContext";

export default function Home() {
  const t = useT();
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <Screenshots />
      <ProgressionDemo />
      <FeaturesGrid />
      <Architecture />
      <h2 className="section-title">{t.stack.title}</h2>
      <TechStack />
      <footer>
        <span>{t.footer.credit}</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/airan-bracamonte" target="_blank" rel="noopener">
            {t.footer.linkedin}
          </a>
          <a href="https://github.com/Bra117/Relevo-showcase#readme" target="_blank" rel="noopener">
            {t.footer.code}
          </a>
        </div>
        <small className="footer-copy">{t.footer.copyright}</small>
      </footer>
    </div>
  );
}
