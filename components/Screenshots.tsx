"use client";

import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

const FILES = [
  "01-hoy",
  "02-entreno-tanteo",
  "03-resumen-puntos",
  "05-grupo-en-vivo",
  "06-mi-equipo",
  "07-liga",
];

export default function Screenshots() {
  const t = useT();
  return (
    <>
      <div className="shots">
        {FILES.map((f, i) => (
          <Reveal key={f} delay={i * 0.05}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/capturas/${f}.webp`} alt={t.shots.items[i]} loading="lazy" />
              <figcaption>{t.shots.items[i]}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="tool-note" style={{ textAlign: "center" }}>
        {t.shots.caption}
      </p>
    </>
  );
}
