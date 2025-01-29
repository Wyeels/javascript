function soma(numero) {
    let soma = 0
    for (var num = 1; num < numero; num++) {
        if (num % 3 == 0 || num % 5 == 0) {
            soma += num
        }   
    }
    console.log(soma)
}

soma(10)