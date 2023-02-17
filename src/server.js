const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/careers", (req, res) => {
  res.sendFile(path.join(__dirname, "careers.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
  res.status(404);
});

app.listen(3000, () => console.log("Server started 🚀"));
