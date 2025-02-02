let botaoa = window.document.getElementById('iadd')
let botaof = window.document.getElementById('iend')
let salvos = []

botaoa.addEventListener('click', start)

botaof.addEventListener('click', end)

function start() {
let numero = document.getElementById('inumero').value 

let valores = document.getElementById('ivalores')

if (numero < 1 || numero > 100 || numero.length < 1) {
    alert('[ERRO] Por favor, verifique se o valor que você quer adicionar é valido!')
} else if (salvos.indexOf(numero) != -1) {
    alert('[ERRO] O valor escolhido já foi selecionado!')
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
    let textos = window.document.createElement('div')

    let soma = 0

    document.body.appendChild(textos)

    textos.innerText = ''
    if (salvos.length < 1) {
        alert('[ERRO] Por favor, garanta que você tenha adicionado pelo menos um número!')
    } else {
        for (let contador = 0; contador < salvos.length; contador++) {
            soma = soma += salvos[contador]
        }

        textos.innerText = `
        No total, foram cadastrados ${salvos.length} números
        O maior número escolhido foi ${salvos[salvos.length - 1]}
        O menor número da lista é o ${salvos[0]}
        A soma de todos esses valores é de ${soma}
        A média de todos os valores juntos é de ${soma / salvos.length}`
    } 
    
    
}

