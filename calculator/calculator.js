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

const afterDot = (number) => {
    number += ''
    if (number.includes('.')) {
        let indexOfDot = (number += '').indexOf('.')
        return number.length - indexOfDot - 1;
    }
    return 0
}

const repeatString = (string, num) => {
    let repeated = '';
    for (let i = 0; i < num; i++) {
        repeated += string
    }
    return repeated;
}


const calculation = (num1,  action, num2) =>{
    if(num1 !== undefined && num2 !== undefined && action !== undefined && action !== '='){
        operationPerformed = true;
        let zerosAfterDot1 = afterDot(num1)
        let zerosAfterDot2 = afterDot(num2)

        let zeros1 = zerosAfterDot1 > zerosAfterDot2 ? zerosAfterDot1 : zerosAfterDot2;
        let swap = "1" + repeatString('0', zeros1)

        num1 = num1 * swap
        num2 = num2 * swap



        return (eval(String(`${num1} ${action} ${num2}`)) / swap)

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
    buttons[0].innerText = 'AC'
}

let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        // logic for number
        if (element.classList.contains('num')) {
            buttons[0].innerText = 'C'
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
            result = calculation(currentNum,  operation, previousNum)
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

