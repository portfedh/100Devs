function checkForFactor (factor, base) {
    const remainder = factor % base;
    if(remainder === 0 ){
        console.log(`The remainder of ${factor} divided by ${base} is ${remainder}`);
      return true
    } else {
        console.log(`The remainder of ${factor} divided by ${base} is ${remainder}`);
      return false
    }
  }