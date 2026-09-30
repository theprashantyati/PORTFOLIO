const mongoose = require('mongoose');
const { getSecret } = require('../utils/getSecret');

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI || (!mongoURI.startsWith('mongodb://') && !mongoURI.startsWith('mongodb+srv://'))) {
      console.log('ℹ️  MongoDB URI not configured. Server running in resilient in-memory fallback mode.');
      return;
    }

    const conn = await mongoose.connect(mongoURI);
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`⚠️  MongoDB connection warning: ${error.message}`);
    console.log('ℹ️  Continuing server execution with fallback data handler.');
  }
};

module.exports = connectDB;
