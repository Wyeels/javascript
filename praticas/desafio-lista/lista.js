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
    let eli

    if (item[escolhido].style.textDecoration == 'line-through') {
        item[escolhido].style.textDecoration = 'none'
        botesc.innerText = 'Completo'
  
    } else {
        const eliminar = document.createElement('button')
        eliminar.innerText = 'Apagar'
        botesc.after(eliminar)
        if (eliminar.innerText == 'Apagar') {
            eli = eliminar.value
        } else {
            eli = eliminar.value
        }

        if (eli == undefined) {
            eliminar.remove()
        }

        item[escolhido].style.textDecoration = 'line-through'
        botesc.innerText = 'Incompleto'
    }

    alert(eli)

    alert(escolhido)

    alert(itens)
    escolhido.style.background = 'red'
}