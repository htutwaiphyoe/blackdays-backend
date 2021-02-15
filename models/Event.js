// third-party modules
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Title is required"],
        maxlength: [100, "title must be at most 100 characters"],
    },
    time: {
        type: Date,
        required: [true, "Time is required"],
    },
    summary: {
        type: String,
        required: [true, "Summary is required"],
        trim: true,
    },
    photos: [
        {
            type: String,
            required: [true, "Photos are required"],
            trim: true,
        },
    ],
});

module.exports = mongoose.model("Event", eventSchema);
