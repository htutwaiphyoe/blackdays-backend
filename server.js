// core modules
const path = require("path");

// third-party modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", () => {
    process.exit(1);
});
dotenv.config({ path: path.join(__dirname, ".env") });

const app = require("./app");

// database connection
let db = process.env.DB_URL.replace("<password>", process.env.DB_PASS);
db = db.replace("<user>", process.env.DB_USER);

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// if (process.env.NODE_ENV === "development") {
//     mongoose.connection.on("connected", () => {
//         console.log("Database connection established");
//     });
// }
const port = process.env.PORT || 5000;

const server = app.listen(port);

process.on("unhandledRejection", () => {
    server.close(() => {
        process.exit(1);
    });
});
