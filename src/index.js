import express from "express";
import bodyParser from "body-parser";

import customer from "./components/customer";

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


export default app;