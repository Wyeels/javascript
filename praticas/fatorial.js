function fatorial(num) {
    if (num == 0) {
        console.log(1)
    } else {
        for (var c = num - 1; c > 0; c--) {
        var res = num *= c
    }
    console.log(res)
    }
    
    
}

fatorial(6)