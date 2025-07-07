const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;