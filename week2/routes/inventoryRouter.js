const express = require('express');
const router = express.Router();
const Item = require("../models/inventoryModel");

router.get('/data', (req, res, next) => {
    Item.find((err, items) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            return res.status(200).send(items);
        }
    });
});

module.exports = router;