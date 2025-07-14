const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamp : true
});

module.exports = mongoose.model("user",userDetails,"User");