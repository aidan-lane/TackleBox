const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 8080;

// Routes
var analysis_routes = require('./analysis');

const API_KEY = process.env.API_KEY  // IPQualityScore secret API key

const client = new Client({
  password: process.env.POSTGRES_PASSWORD,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_DB,
});

// Use external routes
app.use('/analysis', analysis_routes);

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h1>TackleBox Home</h1>");
});

(async () => {
  // The backend and database are started asychronously, so we can't guarantee that
  // the database will be ran first. The client will attempt to connect to the datbase
  // a certain number of tries to account for this.
  retries = 3
  while (retries > 0) {
    try {
      await client.connect();
      console.log(`Connected to database`);
      break
    } catch (e) {
      retries -= 1;
      console.log(`Attempting to connect to database. Tries left: ${retries}`);
    }
    
    await new Promise(r => setTimeout(r, 3000));
  }

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
})();
