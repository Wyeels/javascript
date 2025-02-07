function contarCaracteres(palavra, letra) {
    let total = 0
    for (let letras of palavra) {
        letras = letras.toLowerCase()
        console.log(letras)
        if (letras == letra) {
            total++
        }
    }
    console.log(total)
}

contarCaracteres('Arroz', 'r')