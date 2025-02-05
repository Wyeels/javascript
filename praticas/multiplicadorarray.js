
function multiplicaArray(numeros) {
let res = 1
for (let contador = 0; contador < numeros.length; contador++) {
    res *= numeros[contador]
}
console.log(res)
}

multiplicaArray([1, 2, 3, 4])

