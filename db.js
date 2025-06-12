// db.js file acts as a central module that manages the connection to MongoDB databse
// using Mongoose. It sets up the connection, handles connection events
// and exports the connection object so that your express.js server can use
// it to interact withthe database.
// When server runs , it typically requires or imports this db.js file to
// establish the database connection before handling HTTP requests

const mongoose = require('mongoose');
require('dotenv').config();

// Define the mongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = process.env.MONGODB_URL
//Set up MongoDB Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default Connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Event listener
db.on('connected', () => {
    console.log('Connected to MongoDb Server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error: ', err);
});

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

//Export the database connection
module.exports = db;
