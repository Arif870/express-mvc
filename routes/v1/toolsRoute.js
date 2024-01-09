const express = require("express");
const toolsControllers = require("../../controller/toolsController");
const router = express.Router();

router
  .route("/")
  .get(toolsControllers.getAllTools)
  .post(toolsControllers.createTools);

module.exports = router;
