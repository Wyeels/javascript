const section = document.querySelector('section#guardaritem')
section.style.height = 'min-content'

const novoitem = document.createElement('button')
novoitem.innerText = 'Criar'
section.appendChild(novoitem)
novoitem.addEventListener('click', criar)

function criar() {
    const paragrafo = document.createElement('p')
    const caixa = document.createElement('input')
    caixa.setAttribute('class', 'itens')
    paragrafo.appendChild(caixa)
    novoitem.before(paragrafo)
    atualizar()
}



atualizar()

function atualizar() {
    const item = document.getElementsByClassName('itens')
    const paragrafo = document.querySelectorAll('p')

    for (let contador in item) {
        paragrafo[contador].setAttribute('class', `p${contador}`)
        const label = document.createElement('label')
        label.setAttribute('class', contador)
        const botao = document.createElement('button')
        item[contador].setAttribute('id', contador)
        item[contador].after(label)
        label.appendChild(botao)
        botao.innerText = 'Completo'
        botao.style.display = 'inline'
        botao.addEventListener('click', completo)
        botao.value = contador
        if (document.getElementsByClassName(contador)[1]) {
            document.getElementsByClassName(contador)[0].remove()
        }
    }
}

function completo() {
    const escolhido = this.value
    const botesc = this
    const opcoes = document.getElementById(escolhido)
    if (opcoes.style.textDecoration == 'line-through') {
        opcoes.style.textDecoration = 'none'
        botesc.innerText = 'Completo'
        document.getElementById(`b${escolhido}`).remove()
        
    } else {
        const eliminar = document.createElement('button')
        eliminar.setAttribute('id', `b${escolhido}`)
        eliminar.style.display = 'inline'  
        eliminar.value = escolhido 
        eliminar.innerText = 'Apagar'
        document.getElementsByClassName(escolhido)[0].appendChild(eliminar)
        opcoes.style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'

        eliminar.addEventListener('click', apagar)
    }
}

function apagar() {
    const escolhido = this.value
    
    document.getElementsByClassName(`p${escolhido}`)[0].style.display = 'none'
    atualizar()
}


