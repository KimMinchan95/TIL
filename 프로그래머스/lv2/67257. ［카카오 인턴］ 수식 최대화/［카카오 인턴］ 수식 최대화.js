const calculate = (first, second, oper) => {
    switch (oper) {
        case '-':
            return first - second;
        case '+':
            return first + second;
        case '*':
            return first * second;
    }
} 

const OPERATIONS = [
    ['-', '+', '*'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['+', '*', '-'],
    ['*', '+', '-'],
    ['*', '-', '+'],
];


function solution(expression) {
    let result = Number.MIN_SAFE_INTEGER;
     
    OPERATIONS.forEach(operation => {
        const operands = expression.match(/[0-9]+/g).map(Number);
        const operators = expression.match(/[\*\+\-]/g);
        
        operation.forEach(cur => {
            let idx = operators.indexOf(cur);
            while(idx !== -1) {
                operands[idx] = calculate(operands[idx], operands[idx + 1], cur);
                operands.splice(idx + 1, 1);
                operators.splice(idx, 1);
                idx = operators.indexOf(cur);
            }
        });
        
        const curResult = Math.abs(operands[0])
        if (result <  curResult) result = curResult;
    });
    
    return result;
}