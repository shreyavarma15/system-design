const express = require("express");

const app = express();

let data = "Initial Data";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({ data });
});

//Use post/put in real time
app.get("/updateData", (req, res) => {
  data = "Updated Data";
  res.send({ data });
});

const PORT = 5011;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
