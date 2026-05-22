const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// Serve the built React app
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Example API route
app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the server!" });
});

// All other routes go to React
app.get("/{*path}", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
