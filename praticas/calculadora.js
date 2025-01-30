function soma(num1, operador, num2) {
    if (operador == '+') {
        console.log(num1 + num2)
    } else if (operador == '-') {
        console.log(num1 - num2)
    } else if (operador == '*' || operador == 'x') {
        console.log(num1 * num2)
    } else if (operador == '/' || operador == '÷') {
        console.log(num1 / num2)
    } else {
        console.log('Seu operador deve ser algum operador aritmético!')
    }
    
}

soma(8, '+', 5)