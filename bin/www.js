const app = require("../index");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;


mongoose.connect("mongodb://localhost:27017/dart", {useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB."))
    .catch(err => console.error("Could not connect to MongoDB."));


app.listen(PORT, function () {
    console.log("listening to port", PORT);
    console.log("http://localhost:" + PORT)
});