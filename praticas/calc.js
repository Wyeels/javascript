function calc(val) {
    var res = 0
    for (let c = 0; c < val.length; c++) {
      
      res = res += val[c]
      console.log(res)
    }
  }
  
  calc([8, 2, 3])