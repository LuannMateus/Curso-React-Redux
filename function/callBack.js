const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))