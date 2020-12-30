const { model, Schema } = require('mongoose');
const { EMAIL_REGEX } = require('../consts/regexes');

// MongoDB schema for each user that will be created
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        password: String,
        required: true
    },
    email: {
        password: String,
        required: true,
        trim: true
    },
    // Use the Date type and let mongoose instantiate it
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// You can validate the email whenever mongoose tries to upsert
// Mongoose hooks don't work with arrow functions
userSchema.paths('email').validate(function (email) {
    return EMAIL_REGEX.test(email);
});

// You can export the generated model, but this will prohibit you from tweaking the schema in real time
module.exports = model('User', userSchema);
