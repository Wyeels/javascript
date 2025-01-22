var numero = document.getElementById('inum')
var botao = window.document.querySelector('input[type = button]')
var tabela = document.getElementById('ival')

botao.addEventListener('click', calcular)
tabela.innerHTML = '<option>Digite um número acima!</option>'



function calcular() {   
    var num = numero.value

    if (num.length == 0) {
        alert('Você precisa selecionar um valor!')
    } else {
        tabela.innerText = ''

        for (var valor = 1; valor <= 10; valor++) {
        var resultado = num * valor
        var mostrar = document.createElement('option')
        mostrar.innerText = `${num} x ${valor} = ${resultado}`
        tabela.appendChild(mostrar)
    }
    }
}