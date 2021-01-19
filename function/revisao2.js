// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this == exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default.
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte!')

// Operador Spread / Rest.
function numeros(...num) {
    let total = 0
    num.forEach(n => total += n)
    return total
}

console.log(numeros(1, 2, 3, 4, 5))