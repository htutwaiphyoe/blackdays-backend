// third-party modules
const express = require("express");
const morgan = require("morgan");

// own modules
const eventRouter = require("./routers/eventRouter");

const app = express();

// Middlewares

// logger middleware
app.use(morgan("dev"));

// body parser middleware
app.use(express.json());
// route middlewares

// api routes
app.use("/api/events", eventRouter);
module.exports = app;
