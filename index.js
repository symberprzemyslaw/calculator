//User can put multiple opernad signs and dots, need to fix this
//When display is 0 change display to numSelect


class Calculator {
  constructor() {
    this.numA = '';
    this.numB = '';
    this.operand = '+';
    this.selectedNum = this.numA;

    this.add = (a, b) => a + b;
    this.sub = (a, b) => a - b;
    this.multi = (a, b) => a * b;
    this.div = (a, b) => a / b;

    this.digits = document.querySelectorAll("button");
    this.display = document.querySelector(".first-row-dis");

    this.init();
  }

  operate(numA, numB, operand) {
    if (operand === "+") {
      return this.add(Number(numA), Number(numB));
    } else if (operand === "-") {
      return this.sub(Number(numA), Number(numB));
    } else if (operand === "*") {
      return this.multi(Number(numA), Number(numB));
    } else if (operand === "/") {
      return this.div(Number(numA), Number(numB));
    }
  }

  init() {
    this.digits.forEach(element => {
      element.addEventListener("click", e => {
        if (!element.id) {
          this.selectedNum += element.innerText;
          this.display.textContent += element.innerText;
        } else if (element.id === "clear-btn") {
          this.numB = '';
          this.numA = '';
          this.display.textContent = '';
          this.selectedNum = '';
        } else if (element.id === "score-btn") {
          this.numB = this.selectedNum;
          const result = this.operate(this.numA, this.numB, this.operand);
          const formattedResult = parseFloat(result.toFixed(10)); // Zaokrąglenie i konwersja na liczbę
          const resultText = formattedResult.toString(); // Konwersja wyniku na ciąg znaków

          this.display.textContent = resultText;
          this.numA = resultText;
          this.selectedNum = this.numA;
        } else if (element.id === "back-btn"){
          this.selectedNum = this.selectedNum.split('').splice(0 ,this.selectedNum.length -1).join('')
          if (!this.selectedNum){
            this.selectedNum = 0
          }
          this.display.textContent = this.selectedNum;
        } else if (element.id === "dot-btn") {
          this.selectedNum += element.innerText;
          this.display.textContent += element.innerText;
        } else if (element.id) {
          this.operand = element.innerText;
          this.numA = this.selectedNum;
          this.selectedNum = '';
          this.display.textContent += ` ${this.operand} `;
        }
      });
    });
  }
}

const calculator = new Calculator();
