const item = document.getElementsByClassName('itens')
const section = document.querySelector('section#guardaritem')
section.style.height = 'min-content'
const novoitem = document.createElement('button')
novoitem.innerText = 'Criar'
section.appendChild(novoitem)
novoitem.addEventListener('click', criar)
carregar()

function carregar() {
    for (let contador in item) {
    const botao = document.createElement('button')
    botao.setAttribute('class', contador)
    item[contador].after(botao)
    botao.innerText = 'Completo'
    botao.style.display = 'inline'
    botao.addEventListener('click', completo)
    botao.insertAdjacentHTML('afterend', '<br><br>')
    botao.value = contador
}
}



function completo() {
    const escolhido = this.value
    const botesc = this

    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        botesc.innerText = 'Completo'

        document.getElementsByName(escolhido)[0].remove()

    } else {
        const eliminar = document.createElement('button')
        eliminar.setAttribute('name', escolhido)  
        eliminar.value = escolhido 
        eliminar.innerText = 'Apagar'
        botesc.after(eliminar)
        item[escolhido].style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'

        eliminar.addEventListener('click', apagar)
    }
    
}

function apagar() {
    const escolhido = this.value
    
    document.getElementsByClassName(escolhido)[0].remove()
    document.getElementsByName(escolhido)[0].remove()
    document.getElementsByClassName('itens')[0].remove()
}

function criar() {
    const caixa = document.createElement('input')
    caixa.setAttribute('class', 'itens2')
    caixa.style.display = 'block'
    novoitem.insertAdjacentElement('beforebegin', caixa)
}


