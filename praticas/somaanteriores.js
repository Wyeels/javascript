function somaNumeros(numero) {
    let total = 0
    for (let contador = 1; contador <= numero; contador++) {
        total += contador
    }
    return total
}

console.log(somaNumeros(3))