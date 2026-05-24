const education = [
  {
    degree: "BS in Computer Science & Business",
    concentration: "Concentration in Supply Chain Management",
    school: "Northeastern University",
    period: "April 2026",
    highlights: [
      "Study Abroad: New College of the Humanities, London, UK — Fall 2021",
    ],
  },
  {
    degree: "High School Diploma",
    concentration: "",
    school: "Gonzaga College High School",
    period: "May 2021",
    highlights: [
      "Barnes Award for distinction in honor, humility, reliability & deportment",
    ],
  },
];

const skills = {
  Technical: ["SAS AML", "Java", "SQL", "Python", "TypeScript", "React", "Docker", "PowerShell", "Git"],
  Compliance: ["AML", "KYC", "CDD", "SAR Filing", "Transaction Monitoring", "BSA", "CTF"],
};

export default function Education() {
  return (
    <div className="page">
      <h1 className="page-title">Education</h1>
      <p className="page-subtitle">Academic background and skills.</p>

      {education.map((ed, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <div>
              <p className="card-title">{ed.degree}</p>
              {ed.concentration && (
                <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "2px" }}>{ed.concentration}</p>
              )}
              <p className="card-subtitle" style={{ marginTop: "4px" }}>{ed.school}</p>
            </div>
            <span className="card-meta">{ed.period}</span>
          </div>
          <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {ed.highlights.map((h) => (
              <li key={h} style={{ fontSize: "0.875rem", color: "#374151" }}>{h}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", margin: "32px 0 16px" }}>
        Skills
      </h2>
      {Object.entries(skills).map(([category, items]) => (
        <div className="card" key={category}>
          <p className="card-title" style={{ marginBottom: "12px" }}>{category}</p>
          <div className="tags">
            {items.map((s) => (
              <span className="tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
