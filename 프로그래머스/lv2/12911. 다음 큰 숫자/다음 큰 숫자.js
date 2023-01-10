const countOne = (number) => {
    return number.toString(2).match(/1/g).length;
}

function solution(n) {
    let result = n + 1;
    
    while (countOne(n) !== countOne(result)) {
        result++;
    }
    
    return result;
}