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


function operateCaller(expressionList, idx) {
  const list = expressionList.splice(idx-1, 3);

  const a = +list[0];
  const b = +list[2];
  const operator = list[1];

  expressionList.splice(idx-1, 0, operate(operator, a, b));
}

function orderDecider(e) {
  expression += displayDiv.textContent
  const expressionList = expression.split(' ');

  let idx;
  while (expressionList.length > 1) {
    // check for dividing expression
    idx = expressionList.findIndex(elem => elem == '/');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
    // check for multiplying expression
    idx = expressionList.findIndex(elem => elem == 'x');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
    // check for addition expression
    idx = expressionList.findIndex(elem => elem == '+');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
    // check for subtraction expression
    idx = expressionList.findIndex(elem => elem == '-');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
  }

  displayDiv.textContent = Math.round(expressionList[0] * 100) / 100;
}


function addNum(e) {
  if (displayDiv.textContent.charAt(displayDiv.textContent.length-3) == '.') {
    return;
  }
  const num = e.target.textContent;
  displayDiv.textContent += num;
}

function addOperator(e) {
  if (displayDiv.textContent.length == 0 || 
      displayDiv.textContent[displayDiv.textContent.length-1] == ' ') {
    return;
  }
  expression += displayDiv.textContent
  displayDiv.textContent = '';

  const operator = e.target.textContent;
  expression += ' ' + operator + ' ';
}

function clearDisplay(e) {
  expression = ''
  displayDiv.textContent = '';
}

function deleteExpression(e) {
  displayDiv.textContent = displayDiv.textContent.slice(0, 
                                        displayDiv.textContent.length-1);
}

function changeSign(e) {
  if (+displayDiv.textContent > 0) {
    displayDiv.textContent = '-' + displayDiv.textContent;
  } else if (+displayDiv.textContent < 0) {
    displayDiv.textContent = displayDiv.textContent.slice(1);
  }
}

function addDecimal(e) {
  if (displayDiv.textContent.indexOf('.') == -1) {
    displayDiv.textContent+= '.';
  }
}

let expression = '';
const displayDiv = document.querySelector('#display');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equaltoButton = document.querySelector('#equalto');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const signButton = document.querySelector('#sign');
const decimalButton = document.querySelector('#decimal');

numButtons.forEach(button => {
  button.addEventListener('click', addNum);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', addOperator);
});

equaltoButton.addEventListener('click', orderDecider);

clearButton.addEventListener('click', clearDisplay);

deleteButton.addEventListener('click', deleteExpression);

signButton.addEventListener('click', changeSign);

decimalButton.addEventListener('click', addDecimal)