let numberOne, operator, numberTwo;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, numberOne, numberTwo) {
    switch(operator) {
        case '+':
            add(numberOne, numberTwo);
            break;
        case '-':
            subtract(numberOne, numberTwo);
            break;
        case '*':
            multiply(numberOne, numberTwo);
            break;
        case '/':
            divide(numberOne, numberTwo);
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

function clear() {
    numberOne = null;
    operator = null;
    numberTwo = null;

    calculatorDisplay.textContent = '';
}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', clear);