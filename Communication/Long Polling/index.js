const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let data = "Initial Data";
const waitingList = [];

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingList.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req.query.data;

  while (waitingList.length > 1) {
    const client = waitingList.pop();
    client.json({ data });
  }

  res.send({ success: "Data updated successfully" });
});

const port = 5111;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
