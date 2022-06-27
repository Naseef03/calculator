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

function operateCaller(e) {
  const expressionList = displayDiv.textContent.split(' ');
  const a = expressionList[0];
  const b = expressionList[2];
  const operator = expressionList[1];

  displayDiv.textContent = operate(operator, a, b);
}

const displayDiv = document.querySelector('#display');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equaltoButton = document.querySelector('#equalto');

numButtons.forEach(button => {
  button.addEventListener('click', addNum);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', addoperator);
});

equaltoButton.addEventListener('click', operateCaller)