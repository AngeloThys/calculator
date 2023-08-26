let operandOne = null;
let operandTwo = null;
let operatorOne = null;
let operatorFlag = false;

function writeNumberToDisplay(operand) {
    const calculatorDisplay = document.querySelector(".display");

    if (operatorFlag) {
        calculatorDisplay.textContent = operand;
        operatorFlag = false;
    } else {
        calculatorDisplay.textContent += operand;
    }
}

function assignOperand() {
    const calculatorDisplay = document.querySelector(".display");

    if (operatorOne === null) {
        operandOne = calculatorDisplay.textContent;
    } else {
        operandTwo = calculatorDisplay.textContent;
    }
}

function assignOperator(operator) {
    operatorOne = operator;
    operatorFlag = true;
}

function clearDisplay() {
    const calculatorDisplay = document.querySelector(".display");
    calculatorDisplay.textContent = "";
}

function clearMemory() {
    operandOne = null;
    operandTwo = null;
    operatorOne = null;
    operatorFlag = false;
}

function changeSign() {
    const calculatorDisplay = document.querySelector(".display");
    calculatorDisplay.textContent = Number(calculatorDisplay.textContent) * -1;
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    // Round to 2 decimals to avoid overflow
    return Math.round(Number(a) * Number(b) * 100) / 100;
}

function divide(a, b) {
    if (b === 0) return 'Nice try smartass';
    // Round to 2 decimals to avoid overflow
    return Math.round(Number(a) / Number(b) * 100) / 100;
}

function performOperation() {
    const calculatorDisplay = document.querySelector(".display");

    switch (operatorOne) {
        case '+':
            calculatorDisplay.textContent = String(add(operandOne, operandTwo));
            break;
        case '-':
            calculatorDisplay.textContent = String(subtract(operandOne, operandTwo));
            break;
        case '*':
            calculatorDisplay.textContent = String(multiply(operandOne, operandTwo));
            break;
        case '/':
            calculatorDisplay.textContent = String(divide(operandOne, operandTwo));
            break;
    }
}

function writePointToDisplay() {
    const calculatorDisplay = document.querySelector(".display");

    if (!calculatorDisplay.textContent.includes(".")) {
        if (calculatorDisplay.textContent === "") {
            calculatorDisplay.textContent = "0."
        } else {
            calculatorDisplay.textContent += ".";
        }
    }
}

function disablePointButton() {
    const calculatorDisplay = document.querySelector(".display");
    const pointButton = document.querySelector("#point");

    if (calculatorDisplay.textContent.includes(".")) {
        pointButton.disabled = true;
    } else {
        pointButton.disabled = false;
    }
}

function assignEventListeners() {
    const buttons = document.querySelectorAll(".buttons > button");
    buttons.forEach(button => {
        if (button.classList.contains("operand")) {
            button.addEventListener('click', () => {
                writeNumberToDisplay(button.textContent);
                disablePointButton();
            });
        } else if (button.classList.contains("operator")) {
            button.addEventListener('click', () => {
                if (operatorOne === null) {
                    assignOperand();
                    assignOperator(button.textContent);
                } else {
                    assignOperand();
                    performOperation();
                    clearMemory();
                    assignOperand();
                    assignOperator(button.textContent);
                    disablePointButton();
                }
            });
        } else if (button.id === "clear") {
            button.addEventListener('click', () => {
                clearDisplay();
                clearMemory();
                disablePointButton();
            });
        } else if (button.id === "sign") {
            button.addEventListener('click', () => {
                changeSign();
            });
        } else if (button.id === "equal") {
            button.addEventListener('click', () => {
                assignOperand()
                performOperation();
                clearMemory();
                disablePointButton();
            });
        } else if (button.id === "point") {
            button.addEventListener('click', () => {
                writePointToDisplay();
                disablePointButton();
            });
        }
    });
}

assignEventListeners();