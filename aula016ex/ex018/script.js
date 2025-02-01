let botaoa = window.document.getElementById('iadd')
let botaof = window.document.getElementById('iend')

botaoa.addEventListener('click', start)

botaof.addEventListener('click', end)

function start() {
let numero = document.getElementById('inumero').value 

let valores = document.getElementById('ivalores')

if (numero < 1 || numero > 100 || numero.length < 1) {
    alert('[ERRO] Por favor, verifique se o valor que você quer adicionar é valido!')
} else {
    let opcao = document.createElement('option')
    valores.appendChild(opcao)
    opcao.innerText = `O valor ${numero} foi adicionado!` 
    if (opcao.value == numero) {
        alert('erro')
    }
}

}

