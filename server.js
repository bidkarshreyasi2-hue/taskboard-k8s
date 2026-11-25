const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Containerize the app with Docker", done: true },
  { id: 2, title: "Deploy on Kubernetes", done: false },
];

app.get("/health", (req, res) => res.json({ status: "UP" }));
app.get("/api/tasks", (req, res) => res.json(tasks));
app.post("/api/tasks", (req, res) => {
  const task = { id: tasks.length + 1, title: req.body.title || "Untitled", done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>TaskBoard</title>
<style>
 body{font-family:Arial,sans-serif;max-width:640px;margin:40px auto;padding:0 16px}
 h1{color:#1f4e79} .pod{background:#eef3f8;padding:8px 12px;border-radius:6px;font-size:14px}
 li{margin:6px 0} .done{text-decoration:line-through;color:#777}
</style></head><body>
<h1>TaskBoard</h1>
<p class="pod">Served by pod/container: <b>${os.hostname()}</b></p>
<ul id="list"></ul>
<input id="t" placeholder="New task"><button onclick="add()">Add</button>
<script>
async function load(){
  const r = await fetch('/api/tasks'); const d = await r.json();
  document.getElementById('list').innerHTML =
    d.map(t => '<li class="'+(t.done?'done':'')+'">'+t.title+'</li>').join('');
}
async function add(){
  const v = document.getElementById('t').value; if(!v) return;
  await fetch('/api/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:v})});
  document.getElementById('t').value=''; load();
}
load();
</script></body></html>`);
});

app.listen(PORT, "0.0.0.0", () => console.log(`TaskBoard running on port ${PORT}`));
