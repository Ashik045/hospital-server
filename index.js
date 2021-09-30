// external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// internal import
const addAppoinment = require('./router/addAppoinment');

const app = express();
app.use(express.json());
dotenv.config();

// connect to mongodb database
mongoose
    .connect('mongodb://localhost:27017/appuser', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('mongodb connection successfull');
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/addappoinment', addAppoinment);

app.use((err, req, res, next) => {
    if (res.headersSend) {
        return next(err);
    }
    return res.status(500).json({
        error: err,
    });
});

app.listen(process.env.APP_PORT || 4000, () => {
    console.log(`listening on ${process.env.APP_PORT}`);
});
