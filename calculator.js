console.log("calculator.js")

// ********** PRINT TO DOM FUNCTION ********** //

function printToDom(toPrint) {
  document.getElementById("textSpace").innerHTML = `${toPrint}`;
}

// ********** GET FIRST NUMBER FUNCTION ********** //

function getFirstNum() {
  let firstNum = Number(document.getElementById("firstNum").value);
  return firstNum;
}

// ********** GET SECOND NUMBER FUNCTION ********** //

function getSecondNum() {
  let secondNum = Number(document.getElementById("secondNum").value);
  return secondNum;
} 

// ********** ADDITION FUNCTION ********** //

function adder(num1, num2) {
  return num1 + num2;
}

// ********** SUBTRACTION FUNCTION ********** //

function subtractor(num1, num2) {
  return num1 - num2;
}

// ********** MULTIPLICATION FUNCTION ********** //

function multiplier(num1, num2) {
  return num1 * num2;
}

// ********** DIVISION FUNCTION ********** //

function divider(num1, num2) {
  return (num1 / num2).toFixed(5);
}

// ********** MULTI-CALCULATION FUNCTION ********** //

function multiCalc(num1, num2, aFunction) {

  let theResult = aFunction(num1, num2);
  // console.log("theResult", theResult);
  return theResult;

}

// ********** ADDITION CLICK ACTION ********** //

document.getElementById("addButton").addEventListener("click", function() {
  printToDom(multiCalc(getFirstNum(), getSecondNum(), adder)); 
});

// ********** SUBTRACTION CLICK ACTION ********** //

document.getElementById("subtractButton").addEventListener("click", function() {
  printToDom(multiCalc(getFirstNum(), getSecondNum(), subtractor)); 
});

// ********** MULTIPLICATION CLICK ACTION ********** //

document.getElementById("multiplyButton").addEventListener("click", function() {
  printToDom(multiCalc(getFirstNum(), getSecondNum(), multiplier));
});

// ********** DIVISION CLICK ACTION ********** //

document.getElementById("divideButton").addEventListener("click", function() {
  printToDom(multiCalc(getFirstNum(), getSecondNum(), divider));
});

// ********** CLEAR BUTTON ********** //

document.getElementById("clearButton").addEventListener("click", function() {

  document.getElementById("firstNum").value = "";
  document.getElementById("secondNum").value = "";
  printToDom("");

});
