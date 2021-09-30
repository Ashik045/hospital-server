const mongoose = require('mongoose');

const singinSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            toLowerCase: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        gendar: {
            type: String,
            trim: true,
        },
    },
    {
        timestramp: true,
    }
);

const userss = mongoose.model('User', singinSchema);

module.exports = userss;
