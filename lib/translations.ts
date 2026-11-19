export type Lang = "es" | "en";

type Feature = { icon: string; title: string; desc: string };
type ArchBlock = { title: string; desc: string; points: string[] };

type Dict = {
  nav: { badge: string };
  hero: {
    titleLine1: string;
    titleLine2: string;
    lead: string;
    pills: string[];
    langPill: string;
    downloadBtn: string;
    downloadTag: string;
    downloadTitle: string;
    storeSmall: string;
    storeSoon: string;
    storeTitle: string;
    webPageBtn: string;
  };
  shots: { caption: string; items: string[] };
  demo: {
    title: string;
    subtitle: string;
    weight: string;
    set: (n: number) => string;
    nextLabel: string;
    up: (w: string, newW: string, min: number) => string;
    reps: (w: string) => string;
    short: (w: string, min: number) => string;
    note: string;
  };
  features: { title: string; sub: string; items: Feature[] };
  arch: { title: string; sub: string; blocks: ArchBlock[] };
  stack: { title: string };
  footer: { credit: string; copyright: string; linkedin: string; code: string };
};

export const translations: Record<Lang, Dict> = {
  es: {
    nav: { badge: "Beta · v0.49" },
    hero: {
      titleLine1: "Entrena con tus amigos,",
      titleLine2: "compite contra ti mismo.",
      lead: "App de entrenamiento de fuerza para grupos: sesiones en vivo en el mismo gimnasio o en distintos, progresión automática del peso, un coach que cita estudios y una competencia justa donde cada quien se mide con sus propias semanas.",
      pills: ["👥 Entreno en vivo", "📈 Motor de progresión", "🧠 Coach Kronno", "🔥 La antorcha", "🏆 Liga y retos", "📴 Sin internet"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Descargar la app",
      downloadTag: "ANDROID",
      downloadTitle: "Descarga directa (APK) mientras llega a la Play Store",
      storeSmall: "Disponible en",
      storeSoon: "PRÓXIMAMENTE",
      storeTitle: "Pronto estará publicada en Google Play",
      webPageBtn: "🌐 Página Web",
    },
    shots: {
      caption: "Capturas reales de la app, generadas en un test de Flutter.",
      items: ["Hoy", "Serie de tanteo", "Resumen y puntos", "Grupo en vivo", "Mi equipo", "Liga", "Progreso y tu año", "Los músculos"],
    },
    demo: {
      title: "Prueba el motor de progresión",
      subtitle: "Progresión doble · rango 8–12 reps",
      weight: "Peso (kg)",
      set: (n) => `Serie ${n} · reps`,
      nextLabel: "Próxima sesión",
      up: (w, newW, min) =>
        `Completaste las 3 series al tope del rango con ${w} kg: hoy sube a ${newW} kg y vuelve a ${min} reps.`,
      reps: (w) => `Sigue con ${w} kg y suma una rep en cada serie hasta llegar a 12 en todas.`,
      short: (w, min) =>
        `Te quedaste por debajo de ${min} reps: repite ${w} kg y busca completar el rango antes de subir.`,
      note: "Versión simplificada para la demo. La app tiene 6 modelos, baja el peso un 10 % tras 3 sesiones sin cumplir y redondea al equipo de tu gimnasio.",
    },
    features: {
      title: "Qué incluye",
      sub: "Pensada para los amigos que entrenan juntos, sin dejar de lado a cada persona.",
      items: [
        {
          icon: "👥",
          title: "Entreno en vivo",
          desc: "Una persona crea la sesión y los demás entran con un código, en el mismo gimnasio o en distintos. La app lleva los turnos en la máquina, el ritmo de cada quien o un circuito intercalado.",
        },
        {
          icon: "⚖️",
          title: "Competencia justa",
          desc: "Los Puntos de Relevo premian entrenar, cumplir series, romper récords y ser constante. El peso no da puntos: quien carga 40 kg compite de igual a igual con quien carga 140.",
        },
        {
          icon: "🔥",
          title: "La antorcha",
          desc: "Una racha de todo el equipo que sigue encendida mientras cada quien entrene en la semana. Si alguien falta, se apaga.",
        },
        {
          icon: "🤝",
          title: "Reto entre equipos",
          desc: "Una semana contra otro equipo: gana el que más entrena y más entrena junto en vivo. El peso no cuenta, y un equipo chico compite igual que uno grande.",
        },
        {
          icon: "📸",
          title: "Compartir en historias",
          desc: "Al terminar, una imagen vertical para Instagram, TikTok o WhatsApp con tus series, puntos y récords, o la mejora de cada quien en el grupo.",
        },
        {
          icon: "📈",
          title: "Motor de progresión",
          desc: "6 modelos (lineal, doble, ondulante, por bloques, triple y densidad) que calculan la próxima sesión y explican cada decisión en lenguaje normal.",
        },
        {
          icon: "🧠",
          title: "Kronno, coach basado en estudios",
          desc: "Revisa tu rutina, tus series, tu semana y tu sueño, y cada consejo trae su estudio (53 fuentes). Sin estudio, no hay consejo.",
        },
        {
          icon: "🌙",
          title: "Día ligero y descarga",
          desc: "¿Cansado? Elige un día ligero y Kronno te baja el peso y las series. Cuenta como día entrenado, pero no frena tu progresión.",
        },
        {
          icon: "🎯",
          title: "Primer día sin adivinar",
          desc: "La primera serie es de tanteo y con ella se calcula el peso del resto.",
        },
        {
          icon: "🎙️",
          title: "Dicta tu serie",
          desc: "Di “20 kilos 12 repeticiones” y la serie se escribe sola, también reservas y ayuda.",
        },
        {
          icon: "🫀",
          title: "Mapa muscular y sueño",
          desc: "Tu semana pintada en el cuerpo según las series de cada músculo, y un registro del sueño con su efecto en el entreno.",
        },
        {
          icon: "📴",
          title: "Funciona sin internet",
          desc: "Todo se guarda en el teléfono y se sincroniza cuando vuelve la conexión, también en segundo plano.",
        },
      ],
    },
    arch: {
      title: "Cómo está hecha",
      sub: "App Flutter offline-first, backend en Node.js con TypeScript y PostgreSQL.",
      blocks: [
        {
          title: "App móvil",
          desc: "Flutter y Dart, con todo guardado primero en el teléfono.",
          points: [
            "SQLite con una cola de sincronización en la misma transacción",
            "Motor de progresión en Dart puro, cubierto con pruebas",
            "Notificaciones, widget de Android y tareas en segundo plano",
          ],
        },
        {
          title: "Sincronización",
          desc: "Ningún cambio se pierde aunque no haya conexión.",
          points: [
            "Subida de cambios y bajada incremental por versión",
            "Gana el cambio más reciente; borrados lógicos",
            "Reintentos con espera creciente hasta 15 min",
          ],
        },
        {
          title: "Backend",
          desc: "API REST y tiempo real para las sesiones en grupo.",
          points: [
            "Node.js, TypeScript y Express con cuentas JWT",
            "Socket.IO para el entreno en vivo, con cola al reconectar",
            "PostgreSQL; pruebas contra una base temporal",
          ],
        },
      ],
    },
    stack: { title: "Tecnologías" },
    footer: {
      credit: "Desarrollado por Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. Relevo™ — Todos los derechos reservados.",
      linkedin: "LinkedIn",
      code: "🐙 Ver README en GitHub →",
    },
  },
  en: {
    nav: { badge: "Beta · v0.49" },
    hero: {
      titleLine1: "Train with your friends,",
      titleLine2: "compete against yourself.",
      lead: "A strength-training app for groups: live sessions at the same gym or at different ones, automatic weight progression, a coach that cites research and fair competition where everyone measures against their own past weeks.",
      pills: ["👥 Live workouts", "📈 Progression engine", "🧠 Coach Kronno", "🔥 The torch", "🏆 League and challenges", "📴 Works offline"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Download the app",
      downloadTag: "ANDROID",
      downloadTitle: "Direct download (APK) until it reaches the Play Store",
      storeSmall: "Get it on",
      storeSoon: "COMING SOON",
      storeTitle: "Coming soon to Google Play",
      webPageBtn: "🌐 Website",
    },
    shots: {
      caption: "Real screenshots of the app, generated in a Flutter test.",
      items: ["Today", "Test set", "Summary and points", "Live group", "My team", "League", "Progress and your year", "The muscles"],
    },
    demo: {
      title: "Try the progression engine",
      subtitle: "Double progression · 8–12 rep range",
      weight: "Weight (kg)",
      set: (n) => `Set ${n} · reps`,
      nextLabel: "Next session",
      up: (w, newW, min) =>
        `You hit the top of the range on all 3 sets with ${w} kg: today go up to ${newW} kg and back to ${min} reps.`,
      reps: (w) => `Stay at ${w} kg and add one rep per set until you reach 12 on all of them.`,
      short: (w, min) => `You fell below ${min} reps: repeat ${w} kg and complete the range before going up.`,
      note: "Simplified version for the demo. The app has 6 models, drops the weight 10% after 3 missed sessions and rounds to your gym's equipment.",
    },
    features: {
      title: "What's inside",
      sub: "Built for friends who train together, without leaving anyone behind.",
      items: [
        {
          icon: "👥",
          title: "Live workouts",
          desc: "One person starts the session and the others join with a code, at the same gym or at different ones. The app handles turns on the machine, each person's own pace or an alternating circuit.",
        },
        {
          icon: "⚖️",
          title: "Fair competition",
          desc: "Relevo Points reward training, completing sets, breaking records and consistency. Weight earns no points: someone lifting 40 kg competes on equal terms with someone lifting 140.",
        },
        {
          icon: "🔥",
          title: "The torch",
          desc: "A team-wide streak that stays lit as long as everyone trains during the week. If someone misses, it goes out.",
        },
        {
          icon: "🤝",
          title: "Team challenges",
          desc: "One week against another team: the one that trains more, and trains together live more, wins. Weight doesn't count, and a small team competes on equal terms with a big one.",
        },
        {
          icon: "📸",
          title: "Share to stories",
          desc: "When you finish, a vertical image for Instagram, TikTok or WhatsApp with your sets, points and records, or everyone's improvement in the group.",
        },
        {
          icon: "📈",
          title: "Progression engine",
          desc: "6 models (linear, double, undulating, block, triple and density) that plan the next session and explain each decision in plain language.",
        },
        {
          icon: "🧠",
          title: "Kronno, a research-based coach",
          desc: "Reviews your routine, your sets, your week and your sleep, and every tip comes with its study (53 sources). No study, no tip.",
        },
        {
          icon: "🌙",
          title: "Light day and deload",
          desc: "Tired? Pick a light day and Kronno lowers the weight and the sets. It counts as a training day, but doesn't hold back your progression.",
        },
        {
          icon: "🎯",
          title: "No guessing on day one",
          desc: "The first set is a test set, and it is used to work out the weight for the rest.",
        },
        {
          icon: "🎙️",
          title: "Dictate your set",
          desc: "Say “20 kilos 12 reps” and the set fills itself in, including reps in reserve and assisted reps.",
        },
        {
          icon: "🫀",
          title: "Muscle map and sleep",
          desc: "Your week painted on the body by sets per muscle, plus a sleep log with its effect on training.",
        },
        {
          icon: "📴",
          title: "Works offline",
          desc: "Everything is saved on the phone and syncs when the connection is back, also in the background.",
        },
      ],
    },
    arch: {
      title: "How it's built",
      sub: "An offline-first Flutter app with a Node.js, TypeScript and PostgreSQL backend.",
      blocks: [
        {
          title: "Mobile app",
          desc: "Flutter and Dart, with everything saved on the phone first.",
          points: [
            "SQLite with a sync queue written in the same transaction",
            "Progression engine in pure Dart, covered by tests",
            "Notifications, an Android widget and background tasks",
          ],
        },
        {
          title: "Sync",
          desc: "No change is lost, even without a connection.",
          points: [
            "Change upload and incremental download by version",
            "Most recent change wins; soft deletes",
            "Retries with growing waits up to 15 min",
          ],
        },
        {
          title: "Backend",
          desc: "A REST API plus real time for group sessions.",
          points: [
            "Node.js, TypeScript and Express with JWT accounts",
            "Socket.IO for live workouts, with a queue on reconnect",
            "PostgreSQL; tests run against a temporary database",
          ],
        },
      ],
    },
    stack: { title: "Technologies" },
    footer: {
      credit: "Built by Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. Relevo™ — All rights reserved.",
      linkedin: "LinkedIn",
      code: "🐙 View README on GitHub →",
    },
  },
};
