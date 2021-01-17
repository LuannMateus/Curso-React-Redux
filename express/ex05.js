const express = require('express');
const app = express();
const router = require('./ex05_routes.js');

app.use('/api', router);

app
    .listen(8080, err => {
        if (!err) {
            console.log('Server in PORT [8080]')
        } else {
            console.error('Something went wrong!')
        }
    });