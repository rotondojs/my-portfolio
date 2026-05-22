const projects = [
  {
    name: "Game Nite",
    period: "Jan 2026 — Feb 2026",
    description:
      "Real-time full-stack web application for multiplayer gaming sessions with live game feeds, chat, and move history.",
    bullets: [
      "Extended a WebSocket (Socket.io) interface in a full-stack TypeScript/React app to broadcast newly created games to all connected clients, enabling real-time updates without page refreshes.",
      "Built reusable React components and custom hooks to display live game feeds and unviewed game counts, minimizing code repetition across views.",
      "Implemented a move history system persisting game descriptions in memory, rendered interleaved with chat messages following the controller-service-repository pattern.",
      "Maintained project quality through Git version control, linting, automated Playwright end-to-end tests, and repeatable npm scripts for build/test workflows.",
    ],
    tags: ["TypeScript", "React", "Socket.io", "Playwright", "Node.js"],
    status: "Completed",
  },
  {
    name: "Book & Media Recommendation App",
    period: "Mar 2024 — Apr 2024",
    description:
      "Full-stack application to record, suggest, and rate books and media using a relational database and dynamic tagging system.",
    bullets: [
      "Designed a full-stack application and relational database to record, suggest, and rate books and media based on user preferences and a dynamic tagging system.",
      "Used Docker to containerize and connect an AppSmith frontend to a MySQL database backend.",
      "Developed SQL queries and stored procedures to organize and retrieve tag-based data, enabling dynamic content recommendations.",
      "Implemented a RESTful API using JSON to handle data exchange between the user interface and application logic.",
    ],
    tags: ["SQL", "MySQL", "Docker", "REST API", "AppSmith"],
    status: "Completed",
  },
  {
    name: "Portfolio",
    period: "2026",
    description:
      "This personal website. A React + Vite frontend served by an Express backend, deployed on Render.",
    bullets: [],
    tags: ["React", "TypeScript", "Vite", "Express"],
    status: "Live",
  },
];

export default function Projects() {
  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">Things I've built.</p>

      {projects.map((p) => (
        <div className="card" key={p.name}>
          <div className="card-header">
            <div>
              <p className="card-title">{p.name}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <span className="card-meta">{p.period}</span>
              <span
                className="tag"
                style={
                  p.status === "Live"
                    ? { background: "rgba(34,197,94,0.12)", color: "#4ade80", borderColor: "rgba(34,197,94,0.2)" }
                    : {}
                }
              >
                {p.status}
              </span>
            </div>
          </div>
          <p className="card-body">{p.description}</p>
          {p.bullets.length > 0 && (
            <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{b}</li>
              ))}
            </ul>
          )}
          <div className="tags">
            {p.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
