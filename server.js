const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//public folder 
app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});