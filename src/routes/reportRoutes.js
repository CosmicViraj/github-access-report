const express = require("express");
const router = express.Router();

const reportController =
require("../controllers/reportController");

router.get("/access-report",
reportController.getAccessReport);

module.exports = router;