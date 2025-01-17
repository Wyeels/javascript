function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'Amanhecer.jpg'
        document.body.style.background = '#fedac0'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'Entardecer.jpg'
        document.body.style.background = '#ff9f36'
    } else {
        //BOA NOITE!
        img.src = 'Anoitecer.jpg'
        document.body.style.background = '#031641'
    }
}