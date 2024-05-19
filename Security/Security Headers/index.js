const express = require("express");

const app = express();
const PORT = 5010;

//Middleware for any request coming from http to redirect to https
//x-forwarded-proto gives infor about protocol
//after this first request, HSTS header will be set and this wont be required
//If we want to avoid even the first request, then set it in https://hstspreload.org/
const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    //Redirect to HTTPS
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
};

app.use(redirectToHttps);

//Writing this middleware so that the mentioned header will be disabled
//and we client won't display the server information
app.use((req, res, next) => {
  res.setHeader("Referrer-policy", "origin"); //'no-referrer'
  res.removeHeader("X-Powered-By");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000 ; includeSubDomains ; preload"
  );
  next();
});

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Namaste Frontend System Design",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
