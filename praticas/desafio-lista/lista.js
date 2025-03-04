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
}

function clicou() {
    const escolhido = this.value
    const botesc = this

    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        botesc.innerText = 'Completo'
        itens[botesc].style.background = 'red'
        

        if (itens.indexOf()) {
            itens.splice(botesc, 1)
        }

        if (itens[escolhido].checkVisibility() == true) {
            
            itens[escolhido].remove()
        }

        

    } else {
        const eliminar = document.createElement('button')
        eliminar.setAttribute('class', 'boteli')    
        eliminar.innerText = 'Apagar'
        eliminar.value = escolhido
        botesc.after(eliminar)
        item[escolhido].style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'
        itens.push(eliminar.value)

        // itens.push(document.querySelectorAll('.boteli'))
        
        // itens.push(document.querySelectorAll('button.boteli').value)
    }

    alert(escolhido)
    alert((botesc))
    alert(itens)
    escolhido.style.background = 'red'
}
