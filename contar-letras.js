function contarLetras(palavra) {
    var min = palavra.toLowerCase()
    var total = 1
    var num = 0
    while (num < min.length) {
        num++

        var letras = palavra[num]
        if (letras >= 'a' && letras <= 'z') {
            total++
        }
    }
    console.log(total)
}

contarLetras('Olá, mundo!')