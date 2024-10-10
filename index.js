var rs = require('readline-sync');

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

  const userOp = rs.question(`What operation would you like to perform?`)

  if (!(userOp in operators)) {
    console.log(`That is not a valid operation`)
    operation();
  }

  const num1 = rs.question(`Please enter the first number`)

  if (isNaN(num1)) {
    console.log(`That is not a number`);
    num1;
  }

  const num2 = rs.question(`Please enter the second number`)

  if (isNaN(num2)) {
    console.log(`That is not a number`);
    num2;
  }

  if (userOp = '+') {
    result = num1 + num2;
  } else if (userOp = '-') {
    result = num1 - num2;
  } else if (userOp = '*') {
    result = num1 * num2;
  } else if (userOp = '/') {
    result = num1 / num2;
  }


  console.log(`The result is ${result}`);
