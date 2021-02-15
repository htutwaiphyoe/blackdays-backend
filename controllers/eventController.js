// own modules
const Event = require("../models/Event");

exports.getEvents = (req, res, next) => {
    res.json({
        status: "success",
        data: {
            message: "Hello, world",
        },
    });
};

exports.createEvent = async (req, res, next) => {
    const event = await Event.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            data: event,
        },
    });
};
