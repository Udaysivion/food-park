const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const MENU_FILE = path.join(__dirname, "../data/menu.json");

function readMenu() {
  let raw = fs.readFileSync(MENU_FILE, "utf-8");
  // Strip UTF-8 BOM if present
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  return JSON.parse(raw);
}

function writeMenu(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(MENU_FILE, Buffer.from(json, "utf-8"));
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
}

// GET all menu data
router.get("/", (req, res) => {
  res.json(readMenu());
});

// GET single category
router.get("/category/:category", (req, res) => {
  const menu = readMenu();
  const cat = decodeURIComponent(req.params.category);
  if (!menu[cat]) return res.status(404).json({ error: "Category not found" });
  res.json(menu[cat]);
});

// GET all categories list
router.get("/categories", (req, res) => {
  const menu = readMenu();
  res.json(Object.keys(menu));
});

// POST add new category
router.post("/category", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Category name required" });
  const menu = readMenu();
  if (menu[name]) return res.status(409).json({ error: "Category already exists" });
  menu[name] = [];
  writeMenu(menu);
  res.json({ success: true, category: name });
});

// DELETE a category
router.delete("/category/:category", (req, res) => {
  const menu = readMenu();
  const cat = decodeURIComponent(req.params.category);
  if (!menu[cat]) return res.status(404).json({ error: "Category not found" });
  delete menu[cat];
  writeMenu(menu);
  res.json({ success: true });
});

// POST add item to category
router.post("/category/:category/item", (req, res) => {
  const menu = readMenu();
  const cat = decodeURIComponent(req.params.category);
  if (!menu[cat]) return res.status(404).json({ error: "Category not found" });
  const { name, desc, full, half, image } = req.body;
  if (!name || !desc || !full) return res.status(400).json({ error: "name, desc, full price required" });
  const item = {
    id: generateId(cat.toLowerCase().replace(/\s+/g, "-").substr(0, 5)),
    name,
    desc,
    full: Number(full),
    half: half ? Number(half) : null,
    image: image || "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  };
  menu[cat].push(item);
  writeMenu(menu);
  res.json({ success: true, item });
});

// PUT update item
router.put("/category/:category/item/:id", (req, res) => {
  const menu = readMenu();
  const cat = decodeURIComponent(req.params.category);
  const { id } = req.params;
  if (!menu[cat]) return res.status(404).json({ error: "Category not found" });
  const idx = menu[cat].findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: "Item not found" });
  const { name, desc, full, half, image } = req.body;
  menu[cat][idx] = {
    ...menu[cat][idx],
    ...(name && { name }),
    ...(desc && { desc }),
    ...(full && { full: Number(full) }),
    half: half ? Number(half) : null,
    ...(image && { image })
  };
  writeMenu(menu);
  res.json({ success: true, item: menu[cat][idx] });
});

// DELETE item from category
router.delete("/category/:category/item/:id", (req, res) => {
  const menu = readMenu();
  const cat = decodeURIComponent(req.params.category);
  const { id } = req.params;
  if (!menu[cat]) return res.status(404).json({ error: "Category not found" });
  const before = menu[cat].length;
  menu[cat] = menu[cat].filter(i => i.id !== id);
  if (menu[cat].length === before) return res.status(404).json({ error: "Item not found" });
  writeMenu(menu);
  res.json({ success: true });
});

module.exports = router;
