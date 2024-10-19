const rs = require("readline-sync");

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const getOperator = (limit) => {
  return rs.question(`What operation would you like to perform? `, {
    limit,
    limitMessage: `That is not a valid operator.`,
  });
};

const getNumber = (order) => {
  return rs.questionInt(`Enter the ${order} number: `, {
    limitMessage: "That is not a valid number!",
  });
};

const evaluate = (initData, num1, op, num2) => {
  return initData[op](num1, num2);
};

const calculator = (initData) => {
  const operatorsList = Object.keys(initData);
  const operator = getOperator(operatorsList);
  const firstNumber = getNumber("first");
  const secondNumber = getNumber("second");
  const result = evaluate(initData, firstNumber, operator, secondNumber);
  console.log(`The result is: ${result}`);
};

calculator(operators);
