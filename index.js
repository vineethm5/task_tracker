require("dotenv").config();
const express = require("express");
const dbConnnect = require("./Config/userConfig");

const app = express();

dbConnnect();

const PORT = process.env.PORT || 5001;

app.use("/auth",require("./router/authRoutes"));

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Connected Successfully to the port ${PORT}`)
    }
})