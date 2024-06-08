//Import Required Modules and Files
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//Environmental Variables & PORT
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware to Parse Incoming Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use Routes from Routes.js
app.use(routes);

//Connect to Database & Start Server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server listening on PORT ${PORT}.`);
    });
});