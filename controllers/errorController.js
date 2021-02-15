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

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
        sendDevError(err, res);
    } else {
        sendProdError(err, res);
    }
};
