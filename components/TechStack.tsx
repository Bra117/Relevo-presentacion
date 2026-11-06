const TECHS = [
  "Flutter",
  "Dart",
  "SQLite (sqflite)",
  "socket_io_client",
  "Workmanager",
  "speech_to_text",
  "fl_chart",
  "Node.js",
  "TypeScript",
  "Express",
  "Socket.IO",
  "JWT",
  "PostgreSQL",
];

export default function TechStack() {
  return (
    <div className="stack">
      {TECHS.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
