const express = require('express');
const app = express();

app.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes.'))
    .post((req, res) => res.send('Novo cliente.'))
    .put((req, res) => res.send('Alterar Cliente.'))
    .delete((req, res) => res.send('Remove Cliente.'))

app
    .listen(8080, err => {
        if (!err) {
            console.log('Server in PORT [8080]')
        } else {
            console.error('Something went wrong!')
        }
    })