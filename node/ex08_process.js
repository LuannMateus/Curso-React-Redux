console.log(process.argv)

function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--production')) {
    console.log('Atenção Total!')
} else {
    console.log('Tranquilo.')
}   