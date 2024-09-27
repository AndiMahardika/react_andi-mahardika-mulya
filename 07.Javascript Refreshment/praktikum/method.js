const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
};

const calculatorAdd = calculator.add(5, 5);
const calculatorSubtract = calculator.subtract(5, 5);
const calculatorMultiply = calculator.multiply(10, 10);
const calculatorDivide = calculator.divide(20, 5);

console.log("Add: " + calculatorAdd);
console.log("Subtract: " + calculatorSubtract);
console.log("Multiply: " + calculatorMultiply);
console.log("Divide: " + calculatorDivide);