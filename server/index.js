const express = require("express");
const app = express();
const cors = require("cors");
const { Client } = require("pg");
const client = new Client();
client.connect();

const port = 3000;

app.use(cors());

//read
app.get("/", async (req, res) => {
  res = await client.query("SELECT now() as now");
  res.json({ result: res });
});

// create
app.post("/", async (req, res) => {
  res = await client.query("insert into ");
  res.statusCode(201);
});

// update
app.put("/", async (req, res) => {
  res = await client.query("update  ");
  res.statusCode(200);
});

//delete
app.delete("/", async (req, res) => {
  res = await client.query("delete  ");
  res.statusCode(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
