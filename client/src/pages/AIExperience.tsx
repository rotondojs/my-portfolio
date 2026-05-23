const tools = [
  {
    icon: "🟠",
    name: "Claude",
    desc: "Used for research, writing assistance, and problem-solving across a wide range of tasks.",
  },
  {
    icon: "💻",
    name: "Claude Code",
    desc: "AI-powered CLI for software engineering — used to build and iterate on this portfolio.",
  },
  {
    icon: "🤖",
    name: "ChatGPT",
    desc: "Used for brainstorming, drafting, debugging help, and exploring ideas quickly.",
  },
  {
    icon: "🦙",
    name: "Ollama",
    desc: "Runs large language models locally — used to experiment with open-source models without sending data to the cloud.",
  },
];

export default function AIExperience() {
  return (
    <div className="page">
      <h1 className="page-title">AI Experience</h1>
      <p className="page-subtitle">AI tools I've worked with.</p>

      <div className="interests-grid">
        {tools.map((tool) => (
          <div className="interest-card" key={tool.name}>
            <div className="interest-icon">{tool.icon}</div>
            <p className="interest-name">{tool.name}</p>
            <p className="interest-desc">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
