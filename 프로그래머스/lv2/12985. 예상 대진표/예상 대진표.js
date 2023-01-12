const getNextNum = num => {
    return Math.ceil(num / 2);
}

function solution(n,a,b) {
    let result = 0;
    
    while (a !== b) {
        result++;
        a = getNextNum(a);
        b = getNextNum(b);
    }
    
    return result;
}