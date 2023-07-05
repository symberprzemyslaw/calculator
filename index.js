
let numA = ''
let numB 
let operand = '+'

const digits = document.querySelectorAll("button")
const display = document.querySelector(".first-row-dis")

///Pseudo-code
/*
Najpierw trzeba moc w ogole stworzyc string, pozniej wchodzi operand ktory 
decyduje o calej operacji. Nastepnie klika sie = i pokazuje sie wynik operacji
najlepiej zeby wyswietlal sie w dolnym rzedzie, ale to osobna logika.
Powstanie stringa,wybranie operandu, drugi string, akcja.



*/

function operate(numA,numB,operand){
    if(operand === "+"){
       return add(numA,numB)
    } else if (operand === "-"){
        return sub(numA,numB)
    } else if (operand === "*"){
        return multi(numA,numB)
    } else if (operand === "/"){
        return div(numA,numB)
    }
    
}
//Basic operation functions
const add = (a,b) => a + b
const sub = (a,b) => a - b
const multi = (a,b) => a * b
const div = (a,b) => a / b

let selectedNum = numA
digits.forEach(element => element.addEventListener('click', e => {
    let operand;
    if (!element.id) {
        selectedNum += element.innerText
        display.textContent += selectedNum
        console.log("nie mam id")
    } else if (element.id === 'add-btn'){
        operand = '+'
        selectedNum = numB
        display.textContent += ' + '
    } else if (element.id === 'score-btn'){
        display.textContent = operate(numA,numB,operand)
    }

    
}))

