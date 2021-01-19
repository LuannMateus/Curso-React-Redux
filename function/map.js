// O map possui o mesmo conceito de callback que o forEach, mas seu propósito é gerar um novo array com a mesma quantidade
// de elementos com os valores transformados.

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map( function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).toString().replace('.', ',')}`

let resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)