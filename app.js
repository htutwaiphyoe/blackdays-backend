// third-party modules
const express = require("express");
const morgan = require("morgan");

// own modules
const errorController = require("./controllers/errorController");
const eventRouter = require("./routers/eventRouter");
const AppError = require("./utils/Error");

const app = express();

// Middlewares

// logger middleware
app.use(morgan("dev"));

// body parser middleware
app.use(express.json());
// route middlewares

// api routes
app.use("/api/events", eventRouter);

// invalid route middlewares
app.all("*", (req, res, next) => {
    next(new AppError(404, "Route Not Found ⚠"));
});

// global error handling middleware
app.use(errorController);

module.exports = app;
