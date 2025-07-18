const asyncHandler = require("express-async-handler");
const userDetails = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUser = asyncHandler(async(req,res)=>{
    const allusers = await userDetails.find();
    if(!allusers)
    {
        res.status(400).json({message:"Somethinf wrong"});
    }
    else
    {
        res.status(200).json({allusers});
    }
});

const signup = asyncHandler(async(req,res)=>{
    const {useremail,username,password} = req.body;
    console.log(useremail,"dsds");
    const check_already_taken = await userDetails.find({useremail:useremail});
    console.log(check_already_taken);
    if(check_already_taken.length > 0)
    {
        res.status(401).json({message:"Email has already been taken"});
    }
    const hashed_pass = await bcrypt.hash(password,10);
    const createuser = await userDetails.create({
        useremail,
        username,
        password:hashed_pass
    });
    if(createuser)
    {
        res.status(200).json({message:"User Created Successfully"});
    }

})

const login = asyncHandler(async(req,res)=>{
    const {useremail,password} = req.body;
    const is_found = await userDetails.findOne({useremail});
    console.log(is_found);
    if(await bcrypt.compare(password,is_found.password) && is_found)
    {
        
        const token=jwt.sign({
            "username":is_found.username,
            "password":password,
            "_id":is_found.id
        },process.env.ACCESS_TOCKEN,{expiresIn:"1m"});

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:10000
        });
        res.render("login",{message:"logged in successfully"});
    }
    else
    {
        res.render("login",{message:"check ur username and pass"});
    }

})

module.exports = {getAllUser,signup,login};

