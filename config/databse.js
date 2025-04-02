// const mongoose = require("mongoose")

// let connectDB = async  ()  => {
//     // await mongoose.connect("mongodb+srv://hbdsharanappa52:Z6R37v7Kid6pgRV3@cluster0.xofe4ov.mongodb.net/user_management?retryWrites=true&w=majority&appName=Cluster0")
//     await mongoose.connect("mongodb+srv://kssunil531:sunil@123@cluster0.cb3zh4a.mongodb.net/user_management?retryWrites=true&w=majority&appName=Cluster0",{
//         useNewUrlParser: true,
//     })
//     .then(()=> console.log('COnnected to DB'))
//     .catch(()=> console.log('failed to connect to DB'))
    
// }

// module.exports = connectDB



const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect( "mongodb+srv://kssunil531:sunil%40123@cluster0.cb3zh4a.mongodb.net/user_management"
,);
        // mongodb+srv://kssunil531:<db_password>@cluster0.cb3zh4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

module.exports = connectDB;