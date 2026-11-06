"use client";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { useT } from "@/lib/LanguageContext";

export default function FeaturesGrid() {
  const t = useT();
  return (
    <>
      <h2 className="section-title">{t.features.title}</h2>
      <p className="section-sub">{t.features.sub}</p>
      <div className="grid">
        {t.features.items.map((f) => (
          <Reveal key={f.title}>
            <TiltCard className="feat" maxTilt={6} lift={-2}>
              <div className="icn">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </>
  );
}
