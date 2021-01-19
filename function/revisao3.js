// ES8: Object.values/Object.entries.
const obj = {a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // Mostrando apenas os valores.
console.log(Object.entries(obj)) // Mostrando chave/valor.

// Melhorias na Notação literal.
const nome = 'Carla'
const pessoa = {
    nome, // Criando uma atributo de uma variável, sem colocar par chave/valor.
    ola() { // Função otimizada, sem precisar colocar par chave/valor.
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { 
    nome() {
        return 'Wolf'
    }
}
class Cachorro extends Animal {
    
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar(), new Cachorro().nome())