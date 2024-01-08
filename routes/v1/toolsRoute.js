const express = require("express");
const router = express.Router();

router
  .route("/:id")
  /**
   * @api documentation
   * @api get request
   */
  .get((req, res) => {
    res.send("Tools Found with ID");
  })
  .post((req, res) => {
    res.send("Tools Posted");
  });

module.exports = router;
