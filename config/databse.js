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