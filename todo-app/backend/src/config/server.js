const express = require('express');
const app = express()

const bodyParser = require('body-parser');

const cors = require('./cors');

const port = 3003

app
    .use(bodyParser.urlencoded({ extended: true }))

    .use(bodyParser.json())

    .use(cors);

app
    .listen(port, err => {
        if (!err) 
            console.log(`Backend is running on port ${port}`)
        else 
            console.error('Something went wrong!')
    })


module.exports = app