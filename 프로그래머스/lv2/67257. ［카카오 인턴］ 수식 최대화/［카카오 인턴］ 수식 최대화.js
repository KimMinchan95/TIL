const calculate = (first, operation, second) => {
    switch (operation) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
    }
}

const OPERATION_ORDERS = [
    ['-', '+', '*'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['+', '*', '-'],
    ['*', '-', '+'],
    ['*', '+', '-'],
]

function solution(expression) {
    let result = Number.MIN_SAFE_INTEGER;
    
    OPERATION_ORDERS.forEach(operationOrder => {
        let numberList = expression.match(/\d+/g).map(Number);
        let operationList = expression.match(/[\+\-\*]/g);
        
        operationOrder.forEach(operation => {
            let idx = operationList.indexOf(operation);
            
            while (idx !== -1) {
                numberList[idx] = calculate(numberList[idx], operation, numberList[idx + 1]);
                numberList.splice(idx + 1, 1);
                operationList.splice(idx, 1);
                idx = operationList.indexOf(operation);
            }
        });
        if (result < Math.abs(numberList[0])) result = Math.abs(numberList[0]);
    });
    
    return result;
}