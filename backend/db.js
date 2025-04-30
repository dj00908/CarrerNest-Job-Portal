const mongoose = require("mongoose");

// Replace <your-mongodb-uri> with your actual MongoDB connection string
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jobportal", {
      // Example for local MongoDB
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
