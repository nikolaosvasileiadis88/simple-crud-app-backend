const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();


//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API!");
});

mongoose.connect("mongodb://localhost:27017/").then(() => {
  console.log("Connected!");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
