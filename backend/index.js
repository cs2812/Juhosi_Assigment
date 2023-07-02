const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors())


app.get("/", (req, res) => {
  // res.send("Hello")
  connection.query("SELECT * FROM auth", (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
});


// Login route
app.post("/login", (req, res) => {
  const { id, password } = req.body;
  connection.query(
    "SELECT * FROM auth WHERE id = ? AND password = ?",
    [id, password],
    (error, results) => {
      if (error) {
        res.status(500).send({ message: "somthing went wrong", error });
      } else {
        res.status(200).send({ message: "login successful", data: results[0] });
      }
    }
  );
});


// Customer form submission route
app.post("/customer", (req, res) => {
  // Insert customer data into customer table
  connection.query("INSERT INTO customer SET ?", req.body, (error, results) => {
    if (error) {
      res.status(500).send({ message: "somthing went wrong", error });
    } else {
      res.status(200).send({ message: "submit successful", data: results });
    }
  });
});


// Admin route
app.get("/admin", (req, res) => {
  //Get data from customer table
  connection.query("SELECT * FROM customer", (error, results) => {
    if (error) {
      res.status(500).send({ message: "somthing went wrong", error });
    }
    else{
      res.status(200).send({ message: "query successful", data: results });
    }
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
