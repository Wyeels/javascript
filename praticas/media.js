function calcularMedia(valores) {
    let total = 0
    for (let calc of valores) {
        let valor = 0
        total += (valor + calc)
    }
    return total / valores.length
}

console.log(calcularMedia([8, 4, 2, 4, 7, 9]))