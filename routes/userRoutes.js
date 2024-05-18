const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);

router.post("/loginCheck", userController.loginCheck);

module.exports = router;
