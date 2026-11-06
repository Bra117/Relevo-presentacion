"use client";

import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

export default function Architecture() {
  const t = useT();
  return (
    <>
      <h2 className="section-title">{t.arch.title}</h2>
      <p className="section-sub">{t.arch.sub}</p>
      <div className="arch">
        {t.arch.blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <div className="feat">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <ul>
                {b.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
