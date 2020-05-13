const app = require("../index");


const PORT = process.env.PORT || 8000;


app.listen(PORT, function () {
    console.log("listening to port", PORT);
});