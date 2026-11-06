# Relevo — Presentación del proyecto

Sitio de presentación de **Relevo**, una app de entrenamiento de fuerza para grupos de amigos: entreno en vivo en el mismo gimnasio, motor de progresión con 6 modelos, competencia justa donde cada quien se mide contra sí mismo y modo sin conexión.

🌐 **En vivo:** https://relevo.webtrader.trade
👥 **Página para usuarios:** https://webtrader.trade/relevo/
📄 **Vista general del proyecto:** [Relevo-showcase](https://github.com/Bra117/Relevo-showcase)

> El código fuente de la app y del backend es privado. Este repositorio contiene solo la página de presentación.

## Qué muestra

- Capturas reales de la app.
- Una demo interactiva del motor de progresión (progresión doble, rango 8–12 reps).
- Las funciones principales, la arquitectura (offline-first, sincronización y tiempo real) y las tecnologías.
- Botones para descargar el APK, Google Play (próximamente) y la página para usuarios.
- Español / inglés con un botón.

## Tecnologías del sitio

- [Next.js](https://nextjs.org) 16 (App Router) con exportación estática (`output: "export"`)
- React 19 + TypeScript
- Framer Motion para las animaciones

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera el sitio estático en out/
```

Los textos (ES/EN) están en `lib/translations.ts`; los componentes, en `components/`.

## Publicación

`npm run build` genera `out/`, que se copia a la raíz del dominio (`/var/www/relevo.webtrader.trade`).

---

Desarrollado por **Airan Bracamonte** · [LinkedIn](https://www.linkedin.com/in/airan-bracamonte)
