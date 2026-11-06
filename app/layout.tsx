import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const description =
  "App de entrenamiento de fuerza para grupos: entreno en vivo, motor de progresión, competencia justa y modo sin conexión. Flutter, Node.js/TypeScript y PostgreSQL.";

export const metadata: Metadata = {
  title: "Relevo — Entrenamiento de fuerza en grupo",
  description,
  alternates: {
    canonical: "https://relevo.webtrader.trade/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://relevo.webtrader.trade/",
    title: "Relevo — Entrenamiento de fuerza en grupo",
    description,
    images: ["https://relevo.webtrader.trade/icon.png"],
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Relevo — Entrenamiento de fuerza en grupo",
    description:
      "App de entrenamiento de fuerza para grupos: entreno en vivo, motor de progresión y competencia justa.",
    images: ["https://relevo.webtrader.trade/icon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Relevo",
              applicationCategory: "HealthApplication",
              operatingSystem: "Android",
              description,
              url: "https://relevo.webtrader.trade/",
              image: "https://relevo.webtrader.trade/icon.png",
              author: {
                "@type": "Person",
                name: "Airan Bracamonte",
                url: "https://airanbracamonte.vercel.app/",
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
