let numberOne, operator, numberTwo;

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b === 0) return 'Nice try smartass';
    
    return Number(a) / Number(b);
}

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case '+':
            calculatorDisplay.textContent = String(add(numberOne, numberTwo));
            break;
        case '-':
            calculatorDisplay.textContent = String(subtract(numberOne, numberTwo));
            break;
        case '*':
            calculatorDisplay.textContent = String(multiply(numberOne, numberTwo));
            break;
        case '/':
            calculatorDisplay.textContent = String(divide(numberOne, numberTwo));
            break;
    }
}

function display(number) {
    calculatorDisplay.textContent += number;
}

const calculatorDisplay = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".button-numbers > button");

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => display(numberButton.textContent));
});

function selectOperator(operatorSelected) {
    if (operator) {
        numberTwo = calculatorDisplay.textContent;
        operate(operator, numberOne, numberTwo);
    }

    numberOne = calculatorDisplay.textContent;
    operator = operatorSelected;
}

const operatorButtons = document.querySelectorAll(".button-operators1 > button, .button-operators2 > button");

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => selectOperator(operatorButton.textContent));
});

function equal() {
    numberTwo = calculatorDisplay.textContent;
    calculatorDisplay.textContent = '';
    operate(operator, numberOne, numberTwo);
}

const equalButton = document.querySelector(".equal > button");

equalButton.addEventListener('click', equal);

function clear() {
    numberOne = null;
    operator = null;
    numberTwo = null;

    calculatorDisplay.textContent = '';
}

const clearButton = document.querySelector(".clear > button");

clearButton.addEventListener('click', clear);