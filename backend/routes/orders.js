const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const ORDERS_FILE = path.join(__dirname, "../data/orders.json");

function readOrders() {
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
    return [];
  }
  let raw = fs.readFileSync(ORDERS_FILE, "utf-8");
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  return JSON.parse(raw || "[]");
}

function writeOrders(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(ORDERS_FILE, Buffer.from(json, "utf-8"));
}

// GET all orders
router.get("/", (req, res) => {
  res.json(readOrders());
});

// POST new order
router.post("/", (req, res) => {
  const order = req.body;
  if (!order || !order.items || order.items.length === 0) {
    return res.status(400).json({ error: "Invalid order data" });
  }

  const orders = readOrders();
  const newOrder = {
    ...order,
    orderId: order.orderId || `FP-${Date.now()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  orders.unshift(newOrder);
  writeOrders(orders);
  res.status(201).json({ success: true, order: newOrder });
});

module.exports = router;
