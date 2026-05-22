const interests = [
  { icon: "🎮", name: "Game Development", desc: "Building interactive experiences" },
  { icon: "⚡", name: "Open Source", desc: "Contributing to the community" },
  { icon: "📚", name: "Reading", desc: "Sci-fi, tech, and history" },
  { icon: "🎵", name: "Music", desc: "Playing guitar and producing" },
  { icon: "🏃", name: "Running", desc: "Half-marathon training" },
  { icon: "🌍", name: "Travel", desc: "Exploring new places and cultures" },
];

export default function Interests() {
  return (
    <div className="page">
      <h1 className="page-title">Interests</h1>
      <p className="page-subtitle">What I enjoy outside of work.</p>

      <div className="interests-grid">
        {interests.map((item) => (
          <div className="interest-card" key={item.name}>
            <div className="interest-icon">{item.icon}</div>
            <p className="interest-name">{item.name}</p>
            <p className="interest-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
