console.log("calculator.js")

function printToDom(toPrint) {
  document.getElementById("printSpace").innerHTML = `${toPrint}`;
}

// function getNums() {
//   let numberHolder = {};
//   numberHolder.firstNum = document.getElementById("firstNum").value;
//   numberHolder.secondNum = document.getElementById("secondNum").value;
//   return numberHolder;
// }

// ********** MULTIPLICATION ACTION ********** //

document.getElementById("multiplyButton").addEventListener("click", function() {

  let firstNum = Number(document.getElementById("firstNum").value);
  let secondNum = Number(document.getElementById("secondNum").value);

  printToDom(multiplier(firstNum, secondNum));

});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplier(num1, num2) {
  return num1 * num2;
}


// ********** ADDITION ACTION ********** //

document.getElementById("addButton").addEventListener("click", function() {

  let firstNum = Number(document.getElementById("firstNum").value);
  let secondNum = Number(document.getElementById("secondNum").value);

  printToDom(adder(firstNum, secondNum));
  
});

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function adder(num1, num2) {
  return num1 + num2;
}


// ********** SUBTRACTION ACTION ********** //

document.getElementById("subtractButton").addEventListener("click", function() {

  let firstNum = Number(document.getElementById("firstNum").value);
  let secondNum = Number(document.getElementById("secondNum").value);

  printToDom(subtractor(firstNum, secondNum));
  
});
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractor(num1, num2) {
  return num1 - num2;
}

// ********** DIVISION ACTION ********** //

document.getElementById("divideButton").addEventListener("click", function() {

  let firstNum = Number(document.getElementById("firstNum").value);
  let secondNum = Number(document.getElementById("secondNum").value);

  printToDom(divider(firstNum, secondNum));
  
});

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

// var firstNum = 6;
// var secondNum = 8;

// console.log("Adder: 6 + 8 =", adder(firstNum, secondNum));
// console.log("Multiplier 6 * 8 =", multiplier(firstNum, secondNum));
// console.log("Subtractor: 6 - 8 = ", subtractor(firstNum, secondNum));
// console.log("Divider: 6 / 8 = ", divider(firstNum, secondNum));

