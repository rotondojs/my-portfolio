export default function About() {
  return (
    <div className="page">
      <div className="hero">
        <p className="hero-greeting">Hello, world —</p>
        <h1 className="hero-name">John S. Rotondo</h1>
        <p className="hero-role">Aspiring Full Stack Developer | Compliance & Data Analyst | Supply Chain Management</p>
        <p className="hero-description">
          I'm a Northeastern University student graduating in April 2026 with a BS in Computer
          Science and a concentration in Supply Chain Management. I build full-stack web
          applications and have professional experience in both software engineering and
          financial crimes compliance.
        </p>
        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="mailto:rotondo.j@northeastern.edu" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="page-title" style={{ fontSize: "1.4rem" }}>Quick Facts</h2>
      <div className="about-grid" style={{ marginTop: "16px" }}>
        {[
          { label: "Location", value: "Boston, MA" },
          { label: "Education", value: "Northeastern University, April 2026" },
          { label: "Current Stack", value: "TypeScript, React, Node.js, SQL" },
          { label: "Open To", value: "New opportunities" },
        ].map((item) => (
          <div className="card" key={item.label} style={{ margin: 0 }}>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              {item.label}
            </p>
            <p style={{ fontWeight: 600, color: "var(--text-primary)" }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
