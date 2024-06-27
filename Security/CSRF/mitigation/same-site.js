//Same site header can be used

const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("Set-Cookie", "SameSite=Strict ; Secure");
});

//this Cookie has other values of Lax and None
//Strict doent allow request from any other site
