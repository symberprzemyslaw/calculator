// Class that holds everything together, maybe it be better to split it
// Pressing equition button double visible number
// Maybe Jest implementation? In this state I can't imgaine testing it
// Maybe more functional aproach?
// Multiple dots/operands bug

// mulitple = strange behavior
// can start with 0,mean 01235 * 442
// backspace can erase even 0 SOLVED
// multiple dots can be added 43.....5 SOLVED
// multiple operands
// backspace eraser everything
// add handling multiple operators

let numA = '';
let numB = '';
let operand = '+';
let selectedNum = numA;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

const digits = document.querySelector('.digits');
const display = document.querySelector('.first-row-dis');

const operate = () => {
  if (operand === '+') {
    return add(Number(numA), Number(numB));
  } if (operand === '-') {
    return sub(Number(numA), Number(numB));
  } if (operand === '*') {
    return multi(Number(numA), Number(numB));
  } if (operand === '/') {
    return div(Number(numA), Number(numB));
  }
  return null;
};

const clear = () => {
  numB = '';
  numA = '';
  display.textContent = '';
  selectedNum = '';
};

const getResult = () => {
  numB = selectedNum;
  const result = operate(numA, numB, operand);
  const formattedResult = parseFloat(result.toFixed(10));
  const resultText = formattedResult.toString();

  display.textContent = resultText;
  numA = resultText;
  selectedNum = numA;
};

const back = () => {
  if (selectedNum) {
    selectedNum = selectedNum.split('').splice(0, selectedNum.length - 1).join('');
    if (!selectedNum) {
      selectedNum = 0;
    }
  }
  display.textContent = selectedNum;
};

const enterNum = (element) => {
  if (!selectedNum.includes('.')) {
    selectedNum += element.innerText;
    display.textContent += element.innerText;
  }
};

function init() {
  digits.addEventListener('click', (e) => {
    const element = e.target;

    if (!element.id) { // entering numbers
      enterNum(element);
    } else if (element.id === 'clear-btn') { // clearing all
      clear();
    } else if (element.id === 'score-btn') { // result
      getResult();
    } else if (element.id === 'back-btn') { // erasing
      back();
    } else if (element.id) { // operands
      operand = element.innerText;
      numA = selectedNum;
      selectedNum = '';
      display.textContent += ` ${operand} `;
    }
  });
  digits.addEventListener('keyup', (e) => { // entering numbers from keyboard
    const keyArr = '1234567890.+-*/'.split('');
    if (keyArr.includes(e.key)) {
      selectedNum += e.key;
      display.textContent += e.key;
    }
  });
}

init();
