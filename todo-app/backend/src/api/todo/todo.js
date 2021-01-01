const restful = require('node-restful');

// Inicializando a API do mongoose da Lib restful
const mongoose = restful.mongoose;

// Criando Tabela passando as validações.
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now }
})

// Exportando o modole da API com o database. 
module.exports = restful.model('Todo', todoSchema);