let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Portfolio Model
let portfolioSchema = require("../models/portfolio");

// CREATE Portfolio
router.post("/create-portfolio", (req, res, next) => {
    portfolioSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// READ Portfolio
router.get("/", (req, res) => {
    portfolioSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// UPDATE Portfolio
router
    .route("/update-portfolio/:id")
    // Get Single Portfolio
    .get((req, res) => {
        portfolioSchema.findById(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                }
            });
    })

    // Update Portfolio Data
    .put((req, res, next) => {
        portfolioSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                    console.log(error);
                } else {
                    res.json(data);
                    console.log("Portfolio updated successfully !");
                }
            }
        );
    });

// Delete Portfolio
router.delete("/delete-portfolio/:id",
    (req, res, next) => {
        portfolioSchema.findByIdAndRemove(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data,
                    });
                }
            });
    });

module.exports = router;