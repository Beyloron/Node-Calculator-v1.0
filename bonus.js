var rs = require("readline-sync");

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const cleanUpString = (str) => {
  return str.replaceAll(" ", "");
};

const validateExpression = (expr, arrOperators) => {
  const cleanedExpr = cleanUpString(expr);
  const isThereFirstNumber = !arrOperators.some(
    (item) => cleanedExpr.indexOf(item) === 0
  );
  const isThereSecondNumber = !arrOperators.some(
    (item) => cleanedExpr.indexOf(item) === expr.length - 1
  );
  const isOperatorValid = arrOperators.some((item) =>
    cleanedExpr.includes(item)
  );

  return isThereFirstNumber && isThereSecondNumber && isOperatorValid;
};

const parseExpression = (arrOperators) => {
  const userInput = rs.question(`Enter a mathematical expression: `);
  const cleanedExpr = cleanUpString(userInput);
  if (validateExpression(userInput, arrOperators)) {
    const operatorIndex = cleanedExpr.indexOf(
      arrOperators.find((item) => cleanedExpr.includes(item))
    );
    const firstNumber = +cleanedExpr.substring(0, operatorIndex);
    const secondNumber = +cleanedExpr.substring(
      operatorIndex + 1,
      cleanedExpr.length
    );
    return [firstNumber, cleanedExpr[operatorIndex], secondNumber];
  } else {
    return parseExpression(arrOperators);
  }
};

const calculate = (initData, firstNum, operator, secondNum) => {
  return initData[operator](firstNum, secondNum);
};

const calculator = (initData) => {
  const validOperators = Object.keys(initData);
  const [firstNum, operator, secondNum] = parseExpression(validOperators);
  const result = calculate(initData, firstNum, operator, secondNum);
  console.log("The result is:", result);
};

calculator(operators);
