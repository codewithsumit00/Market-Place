
const express = require("express");
const path = require("path");
const db = require("./config/db");

const app = express();

const PORT = 8080;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//public folder 
app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
