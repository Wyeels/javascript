function contarLetras(palavra, letra) {
var i = 0
    
        for (var quant = 0; quant <= palavra.length; quant++) {
            if (palavra[quant] == letra) {
        i++
        }
    }     
   console.log(i)
}

contarLetras('arroz', 'r')