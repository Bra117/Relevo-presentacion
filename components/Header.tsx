"use client";

import { useT } from "@/lib/LanguageContext";

export default function Header() {
  const t = useT();
  return (
    <header className="nav">
      <div className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="Relevo" />
        Relevo
      </div>
      <span className="badge">{t.nav.badge}</span>
    </header>
  );
}
