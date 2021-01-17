const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Index!</h1>')
})

app.all('/teste', (req, res) => {
    res.send('<h1>Teste</h1>')
})

app.get(/api/, (req, res) => {
    res.send('<h1>API</h1>')
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