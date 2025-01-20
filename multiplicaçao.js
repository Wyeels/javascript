function tabuada(val) {
    var mult = 1

    while (mult <= 10) {
        var som = val * mult
        console.log(`${val} x ${mult} = ${som}`)
        mult++
    }
}

tabuada(3)