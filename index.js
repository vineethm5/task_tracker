require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Connected Successfully to the port ${PORT}`)
    }
})