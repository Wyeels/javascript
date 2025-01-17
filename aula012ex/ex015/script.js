function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescente-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulta-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
    }

    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}