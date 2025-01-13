var idade = 73

if (idade < 16) {
    console.log('Não vota')
} else {
        if (idade >= 16 && idade < 18) {
            console.log('Voto opcional')
        } else {
            if (idade >= 18 && idade < 65) {
                console.log('Voto obrigatório')
            } else {
                if (idade >= 65) {
                    console.log('Voto opcional')
                }
            }
        }
    }

    /* Você tambem pode usar a simplificação:
    var idade = 73
    if (idade < 16) {
        console.log('Não vota')
    } else if (idade < 18) || idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório') 
    } */