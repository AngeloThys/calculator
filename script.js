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
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");

one.addEventListener('click', display.bind(null, 1));
two.addEventListener('click', display.bind(null, 2));
three.addEventListener('click', display.bind(null, 3));
four.addEventListener('click', display.bind(null, 4));
five.addEventListener('click', display.bind(null, 5));
six.addEventListener('click', display.bind(null, 6));
seven.addEventListener('click', display.bind(null, 7));
eight.addEventListener('click', display.bind(null, 8));
nine.addEventListener('click', display.bind(null, 9));
zero.addEventListener('click', display.bind(null, 0));
point.addEventListener('click', display.bind(null, '.'));
