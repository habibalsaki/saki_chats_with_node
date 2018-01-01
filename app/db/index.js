'use strict';

const config = require('../config');
const Mongoose = require('mongoose')

// Mongoose.connection.on('error', error => {
//     console.log("MongoDB Error" , error);
// });

Mongoose.Promise = global.Promise;
Mongoose.connect(config.dbURI, {useMongoClient: true});

let userSchema = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String,
    name: Object
});

let userModel = Mongoose.model('user', userSchema);

module.exports = {
    Mongoose,
    userModel
}

