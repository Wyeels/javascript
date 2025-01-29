function contadorReverso(numero) {
    for (var num = numero; num > 0; num--) {
        console.log(num)
        if (num == 1) {
            console.log('Fim!')
        }
    }
}

contadorReverso(4)