const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas.
const allBolsistas = alunos.map(e => e.bolsista).reduce((acumulador, atual) => {
    return acumulador && atual
})

console.log(allBolsistas)

// Desafio 2: Algum aluno é bolsista.
const bolsista = alunos.map(e => e.bolsista).reduce((acumulador, atual) => {
    return acumulador || atual
})

console.log(bolsista)