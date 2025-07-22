const carro = {
    modelo: 'civic',
    cor: 'branco',
    marca: 'honda',
}

function comprar(idade, nome) {
   if (idade < 18) {
    console.log("Você precisa ter no mínimo 18 anos!")
    } else {
    carro.proprietario = `${nome}`
    console.log(carro)
    } 

    if (carro.proprietario == 'paulo') {
        console.log('PARABENS!')
    }
}

comprar(18, 'paulo')

