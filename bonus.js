var rs = require('readline-sync');

const userInput = rs.question(`Enter a mathematical expression: `);

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

let num1 = '';
let operator = '';
let num2 = '';

for (let char of userInput) {
  if (!isNaN(char)) {
    if (!operator) {
      num1 += char;
    } else {
      num2 += char;
    }
  } else if (char in operators) {
    operator = char;
  }
};

if (operators[operator]) {
  const result = operators[operator](parseInt(num1), parseInt(num2));
  console.log(`Result: ${result}`)
} else {
  console.log(`Invalid input. Please enter a valid mathematical expression`)
};

