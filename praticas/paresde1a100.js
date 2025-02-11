// function paresDe1a100() {
//     for (let contador = 1; contador <= 100; contador++) {
//     if (contador % 2 == 0) {
//         console.log(contador)
//     }
//     }
// }

// paresDe1a100()

function somaArray(valores) {
    let total = 0
    for (let numeros of valores) {
        total += numeros
    }
    return total
}

console.log(somaArray([5, 6, 7, 2, 8, 10]))
