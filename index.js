const express = require("express");
const bodyParser = require("body-parser");

const customer = require("./components/customer");

const app = express();

// Middlewares ivde.

// bodyparser middleware to parse json and url codes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// express routes ivde.
app.use("/customers", customer);


app.get("/", function(req, res){
    res.send("Hey!");
});


module.exports = app;