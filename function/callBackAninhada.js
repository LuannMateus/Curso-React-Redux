// Sem promise.
const http = require('http') // Importando o module http.

const getTurma = (letra, callback) => {
    const url = (`http://files.cod3r.com.br/curso-js/turma${letra}.json`) // Definindo o url da página.
    
    http.get(url, res => { // Método GET para pegar os dados da página.
        let resultado = ''

        res.on('data', dados => { // Usando o parâmetro de res.on data, para pegar os dados e concatenar em uma variável.
            resultado += dados
        })

        res.on('end', _ => { // Usando a callback passada, onde irá tranforma os JSON em objetos reais.
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', (alunos) => {
    nomes = nomes.concat(alunos.map(valor => `A: ${valor.nome}`)) // Concatenando e usando a função map para tranformar tudo em um array
    getTurma('B', alunos => { // callback hell
        nomes = nomes.concat(alunos.map(valor => `B: ${valor.nome}`))
        getTurma('C', alunos => { // callback hell
            nomes = nomes.concat(alunos.map(valor => `'C: ${valor.nome}`))
            console.log(nomes)
        })
    })
})