function contarVogais(palavra) {
let vogais = ['a', 'e', 'i', 'o', 'u']
let total = 0

for (let c = 0; c < palavra.length; c++) {

    if (vogais.indexOf(palavra[c]) != -1) {
        total++  
    }
}
console.log(total)
}

contarVogais('arroz')