function add(a, b) {return a + b;}

function subtract(a, b) {return a - b;}

function multiply(a, b) {return a * b;}

function divide(a, b) {return a / b;}

function operate(operator, a, b) {
  if (operator == '+') {
    return add(a, b);
  } else if (operator == '-') {
    return subtract(a, b);
  } else if (operator == 'x') {
    return multiply(a, b);
  } else if (operator == '/') {
    return divide(a, b);
  }
}


function addNum(e) {
  const num = e.target.textContent;
  displayDiv.textContent += num;
}

function addoperator(e) {
  const operator = e.target.textContent;
  displayDiv.textContent += ' ' + operator + ' ';
}

const displayDiv = document.querySelector('#display');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

numButtons.forEach(button => {
  button.addEventListener('click', addNum);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', addoperator);
});