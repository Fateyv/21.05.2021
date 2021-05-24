const operator = getOperator();
const operands = getOperands('Enter operands separated by commas');
let result = getCalculation(operator, operands);
let expression = operands.join(operator);
alert(`Your result : ${expression} = ${result}`);


function getOperator() {
    let answerOperator = '';
    do {
        answerOperator = prompt('Enter the operation you want to do (+ - / *)');
    } while (isOperatorInvalid(answerOperator));
    return answerOperator;
}

function isOperatorInvalid(answerOperator) {
    return (
        answerOperator !== '+' && 
        answerOperator !== '-' && 
        answerOperator !== '*' && 
        answerOperator !== '/'
    );
}

function getOperands(message) {
    let arr = '';
    do {
        arr = prompt(message);
    } while (isOperandsValid(arr));
    return arr.split(",")
                .map(Number)
                .filter((operand) => isFinite(operand) && operand % 2);
}

function isOperandsValid(arr) {
    return (
        arr === null || 
        arr === ''
    );
}

function getCalculation(operator, operands) {
    let calcResult = 0;
        switch (operator) {
            case "+":
                calcResult = operands.reduce((acc, num) => acc + num);
                break;
            case "-":
                calcResult = operands.reduce((acc, num) => acc - num);
                break;
            case "*":
                calcResult = operands.reduce((acc, num) => acc * num);
                break;
            case "/":
                calcResult = operands.reduce((acc, num) => acc / num);
                break;
    }
    return calcResult;
}