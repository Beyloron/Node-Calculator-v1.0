var rs = require('readline-sync');

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const operator = () => {
  let userOp;
  while (true) {
    userOp = rs.question(`What operation would you like to perform? `);
    if (userOp in operators) {
      return userOp;
    } else {
      console.log(`That is not a valid operator.`);
    }
  }
};

const num1 = () => {
  let userInput;
  while (true) { // This one took a minute, before it was returning the input even if it wasn't a valid input. Same as on operator()
    userInput = rs.question(`Enter the first number: `);
    if (!isNaN(userInput)) { // Nested the return statement to only invoke if input is a number
      return Number(userInput);
    } else {
      console.log(`This is not a number.`);
    }
  }
};

const num2 = () => {
  let userInput;
  while (true) {
    userInput = rs.question(`Enter the second number: `);
    if (!isNaN(userInput)) {
      return Number(userInput);
    } else {
      console.log(`This is not a number.`);
    }
  }
};

const evaluate = (initData, num1, op, num2) => {
  return initData[op](num1, num2);
};

const calculator = (initData) => {
  const op = operator();
  const firstNumber = num1();
  const secondNumber = num2();
  const result = evaluate(initData, firstNumber, op, secondNumber);
  console.log(`The result is: ${result}`);
};

calculator(operators);











// const userInput = () => {
//   const userOp = rs.question(`What operation would you like to perform? `)
//   if (userOp in operators) {
//     const num1Input = rs.question(`Enter the first number: `);
//     const num1 = parseFloat(num1Input);
//     if (!isNaN(num1)) {
//       const num2Input = rs.question(`Enter the second number: `);
//       const num2 = parseFloat(num2Input);
//       if (!isNaN(num2)) {
//         const result = operators[userOp](num1, num2);
//         console.log(`The result is: ${result}`);
//         return result;
//       } else {
//         console.log('Invalid input. Please enter a number for the second operand.');
//         userInput();
//       }
//     } else {
//       console.log('Invalid input. Please enter a number for the first operand.');
//       userInput();
//     }
//   } else {
//     console.log(`That is not a valid operator.`);
//     userInput();
//   }
// };

// userInput();

