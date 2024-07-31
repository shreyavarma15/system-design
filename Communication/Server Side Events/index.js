const express = require("express");
const { join } = require("node:path");

const app = express();

app.get("/sse", (req, res) => {
  //set up sse logic

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("data: Welcome to Server sent event \n\n");

  const intervalId = setInterval(() => {
    res.write(`data: Server time ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
