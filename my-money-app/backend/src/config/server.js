const PORT = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const queryParse = require('express-query-int');
const allowCors = require('./cors.js');

server
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(allowCors)
    .use(queryParse());
server
    .listen(PORT, err => {
        if (err) {
            console.error('Something went wrong with SERVER.')
        } else {
            console.log(`BACKEND is running on PORT ${PORT}.`)
        }
    })

module.exports = server;