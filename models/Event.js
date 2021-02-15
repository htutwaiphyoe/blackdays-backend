// third-party modules
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: [true, "Description is required"],
        maxlength: [100, "Description must be at most 100 characters"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
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
