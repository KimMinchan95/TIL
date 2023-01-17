const score = {
    'S': 1,
    'D': 2,
    'T': 3,
}

const option = {
    '*': 2,
    '#': -1, 
}

function solution(dartResult) {
    let result = 0;
    let before = 0;
    let isContinue = false;
    
    const calculation = [...dartResult].reduce((acc, cur, i) => {
        const curToNum = Number(cur);
        
        if (isContinue) {
            isContinue = false;
            return acc;
        }
        
        if (!isNaN(curToNum)) {
            before = acc;
            result += acc;
            
            if (cur === '1' && dartResult[i + 1] === '0') {
                isContinue = true;
                return 10;
            }
            
            return curToNum;
        }
        
        if (score[cur]) return acc ** score[cur];
        
        if (option[cur] === -1) return acc * option[cur];
        
        result += before;
        
        return acc * option[cur];
    }, 0);
    
    return result + calculation;
}