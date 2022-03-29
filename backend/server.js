const express = require("express");

// Routes
const apiRouter = require('./api');

const app = express();
const port = 8080;

// Use external routes
app.use('/api', apiRouter);

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h1>TackleBox Home</h1>");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
