let botaoa = window.document.getElementById('iadd')
let botaof = window.document.getElementById('iend')

botaoa.addEventListener('click', start)

botaof.addEventListener('click', end)

function start() {
let numero = document.getElementById('inumero').value 

let salvos = []

let valores = document.getElementById('ivalores')

if (numero < 1 || numero > 100 || numero.length < 1) {
    alert('[ERRO] Por favor, verifique se o valor que você quer adicionar é valido!')
} else if (salvos.indexOf(numero) != -1) {
    alert('Erro')
} else {
    let opcao = document.createElement('option')
    valores.appendChild(opcao)
    opcao.innerText = `O valor ${numero} foi adicionado!`
    salvos.push(numero)
    salvos.sort((a, b) => a - b)
    return salvos
    }


}

function end() {
    document.writeln(salvo)
}

