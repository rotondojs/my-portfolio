const projects = [
  {
    name: "VersusHQ",
    url: "https://spring26-project-spring26-project-group-2770.onrender.com/",
    image: "",
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
    name: "Bazaar Game",
    url: "https://github.com/rotondojs/Bazaar-Game/blob/main/README.md",
    image: "",
    period: "Feb 2025 — Apr 2025",
    description:
      "Full digital implementation of the Bazaar board game with networked multiplayer, a tree-search AI, and a pygame replay viewer.",
    bullets: [
      "Built a full digital implementation of Bazaar with all core mechanics including pebble trading, bidirectional equation exchanges, card purchasing, and dynamic scoring enforced by a rule engine fully decoupled from game state.",
      "Architected networked multiplayer via client/server TCP sockets with a custom JSON protocol, enabling remote players to compete across machines with a referee system handling timeouts and invalid moves gracefully.",
      "Developed a tree-search AI that explores thousands of trade and purchase sequences up to four levels deep, selecting optimal plays using a multi-criteria tie-breaking system.",
      "Implemented a pygame replay viewer that captures every game state after each action, allowing users to step through the entire game move by move with a full visual breakdown of the board.",
    ],
    tags: ["Python", "TCP Sockets", "JSON", "pygame", "AI", "Game Engine"],
    status: "Completed",
  },
  {
    name: "Book & Media Recommendation App",
    url: "",
    image: "",
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
    url: "",
    image: "",
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
          {p.image && (
            <img
              src={p.image}
              alt={`${p.name} screenshot`}
              style={{
                width: "100%",
                borderRadius: "6px",
                marginBottom: "16px",
                objectFit: "cover",
                maxHeight: "260px",
                border: "1px solid var(--border)",
              }}
            />
          )}
          <div className="card-header">
            <div>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card-title"
                  style={{ textDecoration: "none", color: "#000000", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  {p.name}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <p className="card-title">{p.name}</p>
              )}
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
                <li key={i} style={{ fontSize: "0.875rem", color: "#374151" }}>{b}</li>
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
