require("dotenv").config();
const express = require("express");
const dbConnnect = require("./Config/userConfig");
const path = require("path");
const app = express();

dbConnnect();

const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/auth",require("./router/authRoutes"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); // for ejs files
app.use(express.static(path.join(__dirname,"public"))); // for css
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Connected Successfully to the port ${PORT}`)
    }
})