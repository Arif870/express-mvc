const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Tools Found");
  })
  .post((req, res) => {
    res.send("Tools Posted");
  });

module.exports = router;
