
let numA;
let numB;
let operand;

function operate(numA,numB,operand){
    if(operand === "+"){
        add(numA,numB)
    } else if (operand === "-"){
        sub(numA,numB)
    } else if (operand === "*"){
        multi(numA,numB)
    } else if (operand === "/"){
        div(numA,numB)
    }
    
}




//Basic operation functions
const add = (a,b) => a + b
const sub = (a,b) => a - b
const multi = (a,b) => a * b
const div = (a,b) => a / b

console.log(add(2,3))

const digits = document.querySelectorAll("button")
digits.forEach(element => element.addEventListener('click', e => {
    let textInsideBtn = e.target.innerText
    document.querySelector('.display').textContent += textInsideBtn
    if (e.target.id === "clear-btn"){
        document.querySelector('.display').textContent = ''
    } 

}))