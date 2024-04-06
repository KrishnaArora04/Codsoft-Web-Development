let display = document.getElementById('display');
let currentNumber = '';
let firstOperand = '';
let operator = '';
let result = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function clearDisplay() {
    currentNumber = '';
    firstOperand = '';
    operator = '';
    display.value = '';
}

function operate(op) {
    if (currentNumber !== '') {
        if (firstOperand === '') {
            firstOperand = currentNumber;
            operator = op;
            currentNumber = '';
        } else {
            calculate();
            operator = op;
        }
    }
}

function calculate() {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }

    display.value = result;
    currentNumber = '';
    firstOperand = '';
}
