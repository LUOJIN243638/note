const mongoose = require('mongoose')

// - 2.1, create collection of user Schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
});
// 	- 2.2 create collection
const User = mongoose.model('User', userSchema)

module.exports = User