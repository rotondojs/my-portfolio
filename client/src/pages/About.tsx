export default function About() {
  return (
    <div className="page">
      <div className="hero">
<h1 className="hero-name">John S. Rotondo</h1>
        <p className="hero-role">Aspiring Full Stack Developer | Compliance & Data Analyst | Supply Chain Analyst</p>
        <p className="hero-description">
          Recent computer science and business graduate from Northeastern University with experience in financial crimes compliance, IT engineering, and full-stack development. 
          Most recently a Financial Crimes Compliance Analyst at Protiviti, where I investigated transaction monitoring alerts and supported AML/KYC regulatory efforts. 
          I've also built full-stack apps in TypeScript and React, designed relational databases, and led a company-wide Windows 11 deployment at Alkermes supporting 500+ users. 
          Currently open to full-time employment in software engineering, supply chain management, and data analytics.
        </p>
        <a href="mailto:rotondo.j@northeastern.edu" className="btn btn-outline">
          Get in Touch
        </a>
      </div>

      <hr className="divider" />

      <h2 className="page-title" style={{ fontSize: "1.4rem", color: "#ffffff" }}>Quick Facts</h2>
      <div className="about-grid" style={{ marginTop: "16px" }}>
        {[
          { label: "Location", value: "Boston, MA" },
          { label: "Education", value: "Northeastern University, April 2026" },
          { label: "Current Stack", value: "TypeScript, React, Node.js, SQL" },
          { label: "Open To", value: "New opportunities" },
        ].map((item) => (
          <div className="card" key={item.label} style={{ margin: 0 }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              {item.label}
            </p>
            <p style={{ fontWeight: 600, color: "#ffffff" }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
