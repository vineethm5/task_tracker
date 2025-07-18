const express = require("express");

const router = express.Router();
const {getAllUser,signup,login} = require("../Controllers/authController");
router.get("/",getAllUser);

router.get("/signup", (req, res) => {
  res.render("auth/signup", { message: null });
});
router.post("/signup",signup);

router.get("/login",(req,res)=>{
    res.render("auth/login",{message:''});
})
router.post("/login",login);


module.exports = router;