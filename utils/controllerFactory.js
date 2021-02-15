// own modules
const { catchError } = require("./utils");
const AppError = require("./Error");

exports.getAll = (Model) =>
    catchError(async (req, res, next) => {
        const docs = await Model.find();
        res.json({
            status: "success",
            data: docs,
        });
    });

exports.getOne = (Model) =>
    catchError(async (req, res, next) => {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return next(new AppError(404, "Event Not Found ⚠"));
        }
        res.status(200).json({
            status: "success",
            data: doc,
        });
    });

exports.createOne = (Model) =>
    catchError(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: "success",
            data: doc,
        });
    });
