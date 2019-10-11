var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
        console.log(data);
    });
});


router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burgerName, function(data) {
        res.json({ id: data.inserId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});


// router.delete(condition, function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;