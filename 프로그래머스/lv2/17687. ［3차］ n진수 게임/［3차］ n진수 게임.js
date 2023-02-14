function solution(n, t, m, p) {
    let result = '';
    let turn = p;
    let num = 0;
    
    while (result.length !== t) {
        const curNum = num.toString(n);
        
        const tubNum = curNum[turn - 1];
        
        if (tubNum) {
            result += tubNum.toUpperCase();
        }
                
        turn -= curNum.length;
        
        if (turn <= 0) turn += m;
        
        num++;
    }
    
    return result;
}