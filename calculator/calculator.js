"use strict";

let display = document.getElementById('screen')

let currentNum, previousNum, operation, result;
let hasDot = false;
let operationChosen = false
let operationPerformed = false;

const getNum = (element) => {
    if (display.innerText === '0' && element.value !== '.') {
        display.innerText = element.value;
    } else if (element.value === '.' && !hasDot) {
        display.innerText += element.value
        hasDot = true;
    } else if (element.value !== '.') {
        display.innerText += element.value;
    }
}

const performCalculation = (num1,  action, num2) =>{
    if(num1 !== undefined && num2 !== undefined && action !== undefined && action !== '='){
        let expresion = String(`${num1} ${action} ${num2}`)
        operationPerformed = true;
        return eval(expresion)
    }
}

const reset = () =>{
    display.innerText = result
    currentNum = result
    result = 0
    previousNum = undefined
    operation = undefined
    operationPerformed = false
}

const clear = ()=>{
    display.innerText = '0';
    currentNum = previousNum = operation = result = undefined;
    hasDot = operationChosen = operationPerformed = false;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        // logic for number
        if (element.classList.contains('num')) {
            if (operationChosen){
                display.innerText = '0';
                operationChosen = false;
                hasDot = false;
            }
            getNum(element)
            if (operation === undefined) {
                currentNum = display.innerText
            } else {
                previousNum = display.innerText;
            }
        } else if (element.classList.contains('operations')) {
            result = performCalculation(currentNum,  operation, previousNum)
            if (operationPerformed){
                reset()
            }
            operationChosen = true;
            operation = element.value;

        } else {
            if (element.value === 'clear'){
                clear()
            }else if (element.value === '-1'){
                currentNum = currentNum * (-1);
                display.innerText = currentNum;
            }else{
                currentNum = new Big(currentNum)
                currentNum = currentNum.div(100)
                display.innerText = currentNum;
            }
        }
    })

});

