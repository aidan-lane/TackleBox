const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 8080;

const client = new Client({
  password: process.env.POSTGRES_PASSWORD,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_DB,
});

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h1>Test</h1>");
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
    
    await new Promise(r => setTimeout(r, 2000));
  }

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
})();