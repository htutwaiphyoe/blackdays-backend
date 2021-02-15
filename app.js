// third-party modules
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middlewares

// logger middleware
app.use(morgan("dev"));

// route middlewares
app.use("/", (req, res) => {
    res.json({
        message: "Hello, world!",
    });
});
module.exports = app;
