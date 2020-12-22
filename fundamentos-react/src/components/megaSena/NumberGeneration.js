function generationNumbers(total) {
    const max = total > 100 ? total : 100
    const min = 0
    let MegaNumbers = []

    for (let i = 0; i < total; i++) {
        let num = Math.floor(Math.random() * (max - min) + min)

        MegaNumbers.includes(num) ? i-- : MegaNumbers.push(num)        
        
    }

    return MegaNumbers
} 

export default generationNumbers;