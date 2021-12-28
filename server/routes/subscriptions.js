const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscription.controller");


router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


router.post("/", controller.saveSubscriptions);

module.exports = router;
