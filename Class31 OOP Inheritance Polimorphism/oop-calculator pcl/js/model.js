class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Cannot divide by zero.");
    }
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }
}

// Example usage:
// const calculator = new Calculator();

// calculator.add(5);
// calculator.multiply(2);
// calculator.subtract(3);
// calculator.divide(2);

// console.log(calculator.getResult());