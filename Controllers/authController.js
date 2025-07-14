const asyncHandler = require("express-async-handler");
const userDetails = require("../Model/User");
const bcrypt = require("bcrypt");

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
    if(check_already_taken)
    {
        res.status(401).json({message:"Email has already been taken"});
    }
    const hashed_pass = await bcrypt.hash(password,10);
    const createuser = await userDetails({
        useremail,
        username,
        hashed_pass
    });
    createuser.save();
    if(createuser)
    {
        res.status(200).json({message:"User Created Successfully"});
    }

})

module.exports = {getAllUser,signup};

