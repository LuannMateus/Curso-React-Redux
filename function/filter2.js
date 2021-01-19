Array.prototype.filter2 = function(callback) {
    const filterArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filterArray.push(this[i])
        } 
    }

    return filterArray
}

const produtos = [
    {nome: 'NoteBook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copode de plástico', preco: 18.99, fragil: false}
]

//const caroFragil = item => item.preco >= 500 === true ? true : false
const caro = item => item.preco >= 500
const fragil = item => item.fragil

produtoFiltrado = produtos.filter2(caro).filter2(fragil)

console.log(produtoFiltrado)