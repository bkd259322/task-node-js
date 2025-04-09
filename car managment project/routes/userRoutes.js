const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyUser = require("../middleware/authUser");

router.post("/login",userController.login);
router.post("/verify",userController.verify);
router.post("/logout", verifyUser,userController.logout);

module.exports = router;
