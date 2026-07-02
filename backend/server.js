const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve admin panel static files
app.use("/admin", express.static(path.join(__dirname, "admin")));

// API routes
const menuRouter = require("./routes/menu");
app.use("/api/menu", menuRouter);

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

// Start server
app.listen(PORT, () => {
  console.log(`\n  🍛 Food Park Backend running at http://localhost:${PORT}`);
  console.log(`  📊 Admin Panel:       http://localhost:${PORT}/admin`);
  console.log(`  🔗 Menu API:          http://localhost:${PORT}/api/menu\n`);
});
