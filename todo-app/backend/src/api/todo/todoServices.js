// Importando o Schema.
const Todo = require('./todo');

// Definindo os métodos que o Schema terá.
Todo.methods(['get', 'post', 'put', 'delete']);
// Defindo configuração caso haja atualização de dados no Schema.
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;