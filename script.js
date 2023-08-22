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