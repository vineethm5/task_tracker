const mongoose = require("mongoose");
 const dbConnnect = async()=>{
    try{
        const conne= await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DbConnected to",conne.connection.host,conne.connection.name);
    }
    catch(e)
    {
        console.log(e);
        process.exit(1);
    }
 }

 module.exports= dbConnnect;