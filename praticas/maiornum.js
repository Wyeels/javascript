function num(num) {
    num.sort((a, b) => a - b)
    var tam = num.length - 1
    console.log(num[tam])
}

num([0, 8, 5, 9, 7, 6, 18])