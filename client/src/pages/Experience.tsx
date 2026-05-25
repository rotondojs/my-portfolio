const experiences = [
  {
    role: "Financial Crimes Compliance Analyst",
    company: "Protiviti — Boston, MA",
    period: "Jul 2025 — Dec 2025",
    bullets: [
      "Analyzed 500+ transaction monitoring alerts using SAS AML, identifying suspicious activity, unusual patterns, and potential financial crimes across client portfolios.",
      "Developed customer risk profiles by applying CDD and AML/CTF guidelines to detect fraud schemes, high-risk behaviors, and emerging financial crime typologies.",
      "Prepared detailed investigation reports with findings and recommendations for senior compliance staff and regulatory bodies, ensuring adherence to BSA/AML requirements.",
      "Partnered with cross-functional teams to collect and validate data supporting AML/KYC regulatory compliance across multiple client engagements.",
    ],
    tags: ["SAS AML", "AML", "KYC", "CDD", "SAR Filing", "BSA", "Transaction Monitoring"],
  },
  {
    role: "Desktop Engineer (Co-op)",
    company: "Alkermes — Waltham, MA",
    period: "Jul 2023 — Jan 2024",
    bullets: [
      "Deployed Windows 11 company-wide across 500+ users through PowerShell-based compatibility testing of MS Suite applications and hardware drivers.",
      "Conducted performance tuning and technical optimization, improving system reliability and reducing average ticket resolution time.",
      "Provided Tier 3 technical support during the Windows 11 rollout, resolving critical escalations and minimizing downtime across the organization.",
    ],
    tags: ["PowerShell", "Windows 11", "IT Support", "System Administration"],
  },
];

export default function Experience() {
  return (
    <div className="page">
      <h1 className="page-title">Experience</h1>
      <p className="page-subtitle">My professional background and work history.</p>

      <div>
        {experiences.map((exp, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <div>
                <p className="card-title">{exp.role}</p>
                <p className="card-subtitle">{exp.company}</p>
              </div>
              <span className="card-meta">{exp.period}</span>
            </div>
            <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)" }}>{b}</li>
              ))}
            </ul>
            <div className="tags">
              {exp.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
