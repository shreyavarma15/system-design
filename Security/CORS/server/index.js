const express = require("express");
const cors = require("cors");

const app = express();

var allowedOrigin = ["http://127.0.0.1:5500"];

const corsOptions = {
  origin: function (origin, callback) {
    //We are restricting cross origin strictly so that even with client extensions
    // the browser cannot make request to server if it's not same origin

    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS Error"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Namaste Frontend System design",
    },
  ]);
});

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
