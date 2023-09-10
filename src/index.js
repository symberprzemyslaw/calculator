//Class that holds everything together, maybe it be better to split it
//Pressing equition button double visible number
//Maybe Jest implementation? In this state I can't imgaine testing it
//Maybe more functional aproach? 
//Multiple dots/operands bug

//mulitple = strange behavior
// can start with 0,mean 01235 * 442
// backspace can erase even 0 SOLVED
//multiple dots can be added 43.....5 SOLVED
//multiple operands
//backspace eraser everything
// add handling multiple operators

let numA = '';
let numB = '';
let operand = '+';
let selectedNum = numA;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

const digits = document.querySelectorAll("button");
const display = document.querySelector(".first-row-dis");

function operate(numA, numB, operand) {
  if (operand === "+") {
    return add(Number(numA), Number(numB));
  } else if (operand === "-") {
    return sub(Number(numA), Number(numB));
  } else if (operand === "*") {
    return multi(Number(numA), Number(numB));
  } else if (operand === "/") {
    return div(Number(numA), Number(numB));
  }
}

function init() {
  digits.forEach(element => {
    element.addEventListener("click", e => {
      if (!element.id) { // entering numbers
        selectedNum += element.innerText;
        display.textContent += element.innerText;
      } else if (element.id === "clear-btn") {
        numB = '';
        numA = '';
        display.textContent = '';
        selectedNum = '';
      } else if (element.id === "score-btn") {
        numB = selectedNum;
        const result = operate(numA, numB, operand);
        const formattedResult = parseFloat(result.toFixed(10));
        const resultText = formattedResult.toString();

        display.textContent = resultText;
        numA = resultText;
        selectedNum = numA;
      } else if (element.id === "back-btn"){
        if (selectedNum){
          selectedNum = selectedNum.split('').splice(0 ,selectedNum.length -1).join('');
          if (!selectedNum){
            selectedNum = 0;
          }
        }
        display.textContent = selectedNum;
      } else if (element.id === "dot-btn") {
        if(!selectedNum.includes('.')){
          selectedNum += element.innerText;
          display.textContent += element.innerText;
        }
      } else if (element.id) { // operands
        operand = element.innerText;
        numA = selectedNum;
        selectedNum = '';
        display.textContent += ` ${operand} `;
      }
    });
    element.addEventListener('keyup', e => {
      const keyArr = '1234567890.+-*/'.split('');
      if(keyArr.includes(e.key)){
        selectedNum += e.key;
        display.textContent += e.key;
      }
    });
  });
}

init();
