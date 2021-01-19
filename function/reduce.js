// Reduce é um método usado para somar, concatenar elementos. Sua estrutura possui uma acumulador
// e um valor atual, onde por meio de uma callback, ela soma, concate e etc o acumulador com o valor atual.

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))

const soma = (acumulador, atual) => acumulador + atual

const result = alunos.map(a => a.nota).reduce(soma, 0)

console.log(result)