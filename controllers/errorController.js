// own modules
const AppError = require("../utils/Error");

const sendDevError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        name: err.name,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendProdError = (err, res) => {
    if (err.operational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        res.status(err.statusCode).json({
            status: "error",
            message: "Oops! Something went wrong 💥",
        });
    }
};

const handleValidationError = (err) => {
    const message = Object.values(err.errors)
        .map((val) => val.message)
        .join(". ");

    return new AppError(400, message);
};

const handleCastError = (err) => new AppError(400, `Invalid ${err.path}: ${err.value}`);

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
        sendDevError(err, res);
    } else {
        if (err.name === "ValidationError") err = handleValidationError(err);
        if (err.name === "CastError") err = handleCastError(err);
        sendProdError(err, res);
    }
};
