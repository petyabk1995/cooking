const User = require('../models/user');

const register = (username, password) => {
    let user = new User({username, password})
    return user.save();
};

module.exports = {
    register,
}