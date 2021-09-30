const express = require('express');

// internal import
const User = require('../schemas/singinSchema');

const router = express.Router();

router.post('/singin', async (req, res) => {
    try {
        const newUser = new User(req.body);
        console.log(newUser);
        // eslint-disable-next-line no-unused-vars
        const result = await newUser.save();

        res.status(200).json({
            message: 'user was added successfully',
        });
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;
