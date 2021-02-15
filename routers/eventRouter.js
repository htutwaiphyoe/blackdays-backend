// third-party modules
const express = require("express");

// own modules
const eventController = require("../controllers/eventController");

const router = express.Router();

router.route("/").get(eventController.getEvents).post(eventController.createEvent);

router.route("/:id").get(eventController.getEvent);

module.exports = router;
