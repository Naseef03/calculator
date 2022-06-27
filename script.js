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
  const expressionList = displayDiv.textContent.split(' ');

  let idx;
  while (expressionList.length > 1) {
    idx = expressionList.findIndex(elem => elem == '/');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
    
    idx = expressionList.findIndex(elem => elem == 'x');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }

    idx = expressionList.findIndex(elem => elem == '+');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }

    idx = expressionList.findIndex(elem => elem == '-');
    if (idx != -1) {
      operateCaller(expressionList, idx);
      continue;
    }
  }

  displayDiv.textContent = expressionList[0];
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
const equaltoButton = document.querySelector('#equalto');

numButtons.forEach(button => {
  button.addEventListener('click', addNum);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', addoperator);
});

equaltoButton.addEventListener('click', orderDecider)