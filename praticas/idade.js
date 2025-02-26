function ano(valor) {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    if (valor < 1920 || valor > anoAtual) {
        return '[ERRO] Ano inválido, tente um valor que siga os parâmetros!'
    } else {
        return `Você, aparentemente, possui ${anoAtual - valor} anos de idade`
    }
}

let idade = ano(2000)
console.log(idade)