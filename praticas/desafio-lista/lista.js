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
    const botesc = this
    const boteli = document.querySelectorAll('.elibot')
    boteli.value = escolhido
    const b = []
    
    
    

    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        botesc.innerText = 'Completo'
        if (boteli[escolhido].checkVisibility() == true) {
        boteli[escolhido].remove()
        }
    } else {
        const eliminar = document.createElement('button')
        eliminar.setAttribute('class', 'elibot')    
        eliminar.innerText = 'Apagar'
        botesc.after(eliminar)
        // b += b.push(boteli.value)
        item[escolhido].style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'
    }

    alert(escolhido)
    alert(boteli)
    alert(b)
    alert(itens)
    escolhido.style.background = 'red'
}