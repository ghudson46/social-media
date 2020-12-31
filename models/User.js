const { model, Schema } = require('mongoose');

// MongoDB schema for each user that will be created
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});

module.exports = model('User', userSchema);
