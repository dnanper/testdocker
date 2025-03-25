const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const PORT = 5001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "musicdb",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Lỗi kết nối database:", err);
    return;
  }
  console.log("✅ Kết nối database thành công!");
});

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
