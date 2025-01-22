var inicio = window.document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.querySelector('input#ipasso')
var botao = document.querySelector('input[type = button]')
var mensagem = window.document.getElementsByTagName('p')[0]

var paragrafo = document.createElement('p')

mensagem.innerText = 'Calculando...'

botao.addEventListener('click', clicou)

function clicou() {
    var iniciovalor = Number(inicio.value)
    var fimvalor = Number(fim.value)
    var passovalor = Number(passo.value)

    if (inicio.value.length == 0) {
        alert('Você precisa selecionar um valor em "Início"!')
    } else if (fim.value.length == 0) {
        alert('Você precisa selecionar um valor em "Fim"!')
    }

    paragrafo.innerText = ''

    for (var valor = 1; valor <= fimvalor; valor += passovalor) {
        //fimvalor1.innerText += `${valor}\uD83C\uDFF3\uFE0F`
        paragrafo.innerText += `${valor}\uD83D\uDC49`
           
        if (passovalor == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passovalor++
            }
    }
        
    if (paragrafo.length == valor.value) {
            paragrafo.innerText += '\uD83C\uDFF3\uFE0F'
        }
/*
    var valor = 1
    while(valor <= fimvalor) {
        var soma = iniciovalor += passovalor
        fimvalor1.innerText = soma
        valor += passovalor
    }
*/  
    mensagem.innerText = 'Calculado:'
    mensagem.appendChild(paragrafo)
}