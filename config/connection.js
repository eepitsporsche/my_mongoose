//Import Mongoose
const mongoose = require('mongoose');

//Connect to MongoDB Database Using URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/my_mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;