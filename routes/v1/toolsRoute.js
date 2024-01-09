const express = require("express");
const toolsControllers = require("../../controller/toolsController");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

router
  .route("/")
  // here viewCount is router level middleware
  .get(viewCount, toolsControllers.getAllTools)
  .post(toolsControllers.createTools);

module.exports = router;
