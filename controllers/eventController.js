// own modules
const Event = require("../models/Event");
const controllerFactory = require("../utils/controllerFactory");

exports.getEvents = controllerFactory.getAll(Event);

exports.getEvent = controllerFactory.getOne(Event);

exports.createEvent = controllerFactory.createOne(Event);
