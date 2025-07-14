const express = require("express");

const router = express.Router();
const {getAllUser,signup} = require("../Controllers/authController");
router.get("/",getAllUser);
router.post("/signup",signup);


module.exports = router;