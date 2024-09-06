const mongoose = require("mongoose");

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
        
    } catch (error) {
        console.error('MongoDB connection Error')
    }
}

module.exports = databaseConnection;