const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

app.get('/', (req, res, next) => {
    console.log('Resposta...')
    res.send('<h1>Hello Express!</h1>')
})

/*
app
    .listen(8080, err => {
        if (!err) {
            console.log('Server in PORT [8080]')
        } else {
            console.error('Something went wrong!')
        }
    })*/