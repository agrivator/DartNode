const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middlewares

// bodyparser middleware to parse json and url codes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// express routes ivde.
// app.use("/users", user);


app.get("/", function(req, res){
    res.send("Hey!");
});


module.exports = app;