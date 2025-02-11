function contarConsoantes(palavra) {
    let vogais = 'aeiou'
    vogais = vogais.split('')
    let final = palavra.length
    palavra = palavra.toLowerCase()
    for (let contador of palavra) {
        if (contador == vogais[0] || contador == vogais[1] || contador == vogais[2] || contador == vogais[3] || contador == vogais[4]) {
        final--
    }

    }
    return final
}

console.log(contarConsoantes('Arroz'))