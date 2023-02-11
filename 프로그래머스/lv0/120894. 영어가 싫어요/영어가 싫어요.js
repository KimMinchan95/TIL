const numbersArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(numbers) {
    let result = '';
    
    let curStr = '';
    
    for (let i = 0; i < numbers.length; i++) {
        curStr += numbers[i];
        
        const found = numbersArr.findIndex(cur => cur === curStr);
        
        if (found !== -1) {
            curStr = '';
            result += found;
        }
    }
    
    return Number(result);
}