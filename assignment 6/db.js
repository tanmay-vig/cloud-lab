const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db(); // Uses DB name from connection string
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("DB connection error:", err);
        process.exit(1);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };
