// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("carrito.db");

db.run(`
  CREATE TABLE IF NOT EXISTS carrito (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    precio REAL,
    cantidad INTEGER
  )
`);

app.get("/carrito", (req, res) => {
  db.all("SELECT * FROM carrito", [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

app.post("/carrito", (req, res) => {
  const { nombre, precio, cantidad } = req.body;
  db.run(
    "INSERT INTO carrito (nombre, precio, cantidad) VALUES (?, ?, ?)",
    [nombre, precio, cantidad],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.delete("/carrito/:id", (req, res) => {
  db.run("DELETE FROM carrito WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.status(204).end();
  });
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
