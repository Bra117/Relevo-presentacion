"use client";

import { useT } from "@/lib/LanguageContext";

export default function PlayStoreSoon() {
  const t = useT();
  return (
    <button className="store-btn" disabled title={t.hero.storeTitle} aria-label={`Google Play · ${t.hero.storeSoon}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#00d7fe" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
        <path fill="#ffce00" d="m16.8 8.6 3.3 1.9c1.2.7 1.2 2.4 0 3.1l-3.3 1.9L13.4 12l3.4-3.4Z" />
        <path fill="#00f076" d="M3.6 1.8c.4-.2.9-.2 1.4.1l11.8 6.7L13.4 12 3.6 1.8Z" />
        <path fill="#f83a4b" d="M13.4 12l3.4 3.4L5 22.1c-.5.3-1 .3-1.4.1L13.4 12Z" />
      </svg>
      <span>
        <small>{t.hero.storeSmall}</small>
        <b>Google Play</b>
      </span>
      <span className="soon">{t.hero.storeSoon}</span>
    </button>
  );
}
