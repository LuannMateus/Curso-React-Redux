// let e const.
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String.
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring 

    // Usando em uma string.
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

    // Usando em uma array.
const [x, ,y] = [1, 2, 3]
console.log(x, y)

    // Usando em um objeto.
const {idade:age, nome} = {nome: 'Sophia', idade: 4}
console.log(age, nome)