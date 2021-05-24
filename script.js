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
    arr = arr.split(",");
    return arr.map(Number).filter(Number.isFinite).filter((operand) => operand % 2 !== 0);
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
                calcResult = operands.reduce((acc, num) => acc + num, 0);
                break;
            case "-":
                calcResult = operands.reduce((acc, num) => acc - num, 0);
                break;
            case "*":
                calcResult = operands.reduce((acc, num) => acc * num, 0);
                break;
            case "/":
                calcResult = operands.reduce((acc, num) => acc / num, 0);
                break;
    }
    return calcResult;
}