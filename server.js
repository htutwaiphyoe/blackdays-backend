// core modules
const path = require("path");

// third-party modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

if (process.env.NODE_ENV === "development") {
    mongoose.connection.on("connected", () => {
        console.log("Database connection established");
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
