function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase()
    if (palavra.split('').reverse().join('') == palavra) {
        return true
    } else {
        return false
    }
}

console.log(verificarPalindromo('arara'))