function maiorMenor(numeros) {
    maior = numeros[0]
    menor = numeros[0]

    for (let contar of numeros) {
    if (numeros[contar] > maior) 
        maior = numeros[contar]
    
    if (numeros[contar] < menor)
        menor = numeros[contar]
    }
    console.log(`O menor valor foi ${menor}, e o maior foi ${maior}, a soma deles é ${menor + maior} e a média dos dois valores somados é ${(maior + menor) / 2}`)
}

maiorMenor([8, 2, 3, 4, 1])