const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


const newCar = carrinho.map(json => JSON.parse(json))
    .map(item => item.preco).map(toJson => JSON.stringify(toJson))
console.log(newCar)