console.log("calculator.js")

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplier(num1, num2) {
  return num1 * num2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function adder(num1, num2) {
  return num1 + num2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractor(num1, num2) {
  return num1 - num2;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divider(num1, num2) {
  return num1 / num2;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

var firstNum = 6;
var secondNum = 8;

console.log(adder(firstNum, secondNum));