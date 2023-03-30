const caculateKnightPower = num => {
    let result = 0;
    
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i**2 === num) {
                result += 1;
            } else {
                result += 2;  
            }
        }
    }
    
    return result;
}

function solution(number, limit, power) {
    const numbers = [];
    
    for (let i = 1; i <= number; i++) {
        numbers.push(i);
    }
    
    return numbers.reduce((acc, cur) => {
        const knightPower = caculateKnightPower(cur);
        
        return acc += knightPower > limit ?  power : knightPower;
    }, 0);
}