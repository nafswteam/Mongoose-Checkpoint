const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const DB_URL = process.env.DB_URL

module.exports = async function(){
    try {
        const connected = await mongoose.connect(DB_URL);
        if(connected) {
            console.log("🚀🚀🚀Database was successfully connected.")
        }
    } catch (error) {
        console.log({errorName:error.name, message: error.message})
    }
} 



