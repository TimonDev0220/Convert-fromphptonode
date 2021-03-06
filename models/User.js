const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }, 
    company: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    currency: {
        type: Number,
        required: true
    },
});

module.exports = User = mongoose.model("users", UserSchema);