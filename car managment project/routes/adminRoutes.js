const express = require("express");
const { verify } = require("jsonwebtoken");
const router = express.Router();
const adminController = require("../controllers/adminController");
const verifyAdmin = require("../middleware/authAdmin");
const verifyUser = require("../middleware/authAdmin")

router.post("/login",adminController.login);
router.post("/logout",verifyAdmin,adminController.logout);
router.post("/cars",verifyAdmin,verifyUser,adminController.addCar);
router.put("/cars/:id",verifyAdmin,adminController.updateCar);
router.delete("/cars/:id",verifyAdmin,adminController.deleteCar);

module.exports = router;
