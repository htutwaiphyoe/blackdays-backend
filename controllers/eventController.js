// own modules
const Event = require("../models/Event");
const { catchError } = require("../utils/utils");

exports.getEvents = catchError(async (req, res, next) => {
    res.json({
        status: "success",
        data: {
            message: "Hello, world",
        },
    });
});

exports.createEvent = catchError(async (req, res, next) => {
    const event = await Event.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            data: event,
        },
    });
});
