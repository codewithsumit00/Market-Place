const express = require("express");
const path = require("path");
require("dotenv").config();

// Database connection
const db = require("./config/db");

// Home routes
const homeRoutes = require("./routes/homeRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", homeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});