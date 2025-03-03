const item = document.getElementsByClassName('itens')
const itens = []

for (let contador in item) {
    const botao = document.createElement('button')
    item[contador].after(botao)
    botao.innerText = 'Completo'
    botao.style.display = 'inline'
    botao.addEventListener('click', clicou)
    botao.insertAdjacentHTML('afterend', '<br></br>')
    botao.value = contador
    itens.push(contador)
}

function clicou() {
    const escolhido = this.value
    
    // item[escolhido].style.textDecoration = 'line-through'
    
    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        item[escolhido].style.background = 'blue'
        // const eliminar = document.createElement('button')
        // eliminar.innerText = 'aaaaaaaaaaa'
        // escolhido.appendChild(eliminar)
    } else {
        item[escolhido].style.textDecoration = 'line-through'
    }

    alert(escolhido)
    
    
    alert(itens)
    escolhido.style.background = 'red'
}