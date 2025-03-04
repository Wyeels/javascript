const item = document.getElementsByClassName('itens')

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


function completo() {
    const escolhido = this.value
    const botesc = this

    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        botesc.innerText = 'Completo'

        document.getElementById(escolhido).remove()

    } else {
        const eliminar = document.createElement('button')
        eliminar.setAttribute('id', escolhido)  
        eliminar.value = escolhido 
        eliminar.innerText = 'Apagar'
        botesc.after(eliminar)
        item[escolhido].style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'

        eliminar.addEventListener('click', apagar)
    }
    alert(escolhido)
}

function apagar() {
    const escolhido = this.value
    
    document.getElementsByClassName(escolhido)[0].remove()
    document.getElementById(escolhido).remove()
    item[escolhido].remove()

    alert(escolhido)
}

