const client = require("./client");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO
//Expose REST call which will internally call gRPC server function using gRPC client

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) {
      res.send(data.customers);
    }
  });
});

app.post("/create", (req, res) => {
  let newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.insert(newCustomer, (err, data) => {
    if (err) {
      console.log(err);
    }

    res.send({ message: "Customer added successfully!" });
  });
});

app.post("/update", (req, res) => {
  let updatedCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.update(updatedCustomer, (err, data) => {
    if (err) {
      console.log(err);
    }

    res.send({ message: "Customer updated successfully" });
  });
});

app.post("/remove", (req, res) => {
  client.remove({ id: req.body.customer_id }, (err, _) => {
    if (err) {
      console.log(err);
    }

    console.log("Customer removed successfully");
    res.send({ message: "Customer removed successfully" });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
