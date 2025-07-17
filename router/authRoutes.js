const express = require("express");

const router = express.Router();
const {getAllUser,signup,login} = require("../Controllers/authController");
router.get("/",getAllUser);

// ✅ Show signup form
router.get("/signup", (req, res) => {
  res.render("signup", { message: null });
});

router.post("/signup",signup);


router.get("/login",(req,res)=>{
    res.render("login",{message:''});
})
router.post("/login",login);


module.exports = router;