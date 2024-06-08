//Import Mongoose and Models
const { User, Thought, Reaction } = require('../models');
const mongoose = require('mongoose');

//Import Connection from connection.js
const connection = require('../config/connection');

//User Seed Data
const users = [
    {
        username: 'porsche',
        email: 'herskorn@gmail.com',
        thought: [],
    },
];

//Console Log Connection for Debugging
console.log(connection);

//Connect to Mongoose Database
connection.once('open', async () => {
    console.log("connected");

    //Drop Existing Database and Recreate
    await User.deleteMany({});

    //Add Users to Database and Create Variable to Add Users to Database
    await User.collection.insertMany(users);

    //Console Logs to Terminal
    console.table(users);
    console.info('Database Seeded');
    
    process.exit(0);
})