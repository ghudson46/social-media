const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(_, args, context, info) {
            // TODO: Validate user data
            // TODO: Make sure user doesnt already exist
            // TODO: hash the password and create an authentication token
        }
    }
}