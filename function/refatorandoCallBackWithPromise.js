const http = require('http') // Importando o module http.

const getTurma = (letra) => {

    const url = (`http://files.cod3r.com.br/curso-js/turma${letra}.json`) // Definindo o url da página.

    return new Promise((resolve, reject) => {
        http.get(url, res => { // Método GET para pegar os dados da página.
            let resultado = ''

            res.on('data', dados => { // Usando o parâmetro de res.on data, para pegar os dados e concatenar em uma variável.
                resultado += dados
            })

            res.on('end', _ => { // Usando a callback passada, onde irá tranforma os JSON em objetos reais.
                try {
                    resolve(resultado)
                } catch (err) {
                    reject(err)
                }
                
            })
        })
    })

}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(res => [].concat(JSON.parse(...res)))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(console.log)
    .catch(err => console.error(err.message))
