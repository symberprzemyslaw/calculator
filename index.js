let numA = '';
let numB;
let operand = '+';

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

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

let selectedNum = numA;

digits.forEach(element =>
  element.addEventListener("click", e => {
    if (!element.id) {
      selectedNum += element.innerText;
      display.textContent += element.innerText;
    } else if (element.id === "clear-btn") {
      numB = ''
      numA = ''
      display.textContent = '';
      selectedNum = '';
    } else if (element.id === "score-btn") {
      numB = selectedNum;
      const result = operate(numA, numB, operand);
      display.textContent = result;
      numA = result;
      selectedNum = '';
    } else if (element.id) {
      operand = element.innerText;
      numA = selectedNum;
      selectedNum = '';
      display.textContent += ` ${operand} `;
  }})

);