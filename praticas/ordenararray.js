function ordenarArray(numero) {
    numero = numero.sort((a, b) => a - b)
    return numero
}

console.log(ordenarArray([8, 1, 4, 2]))