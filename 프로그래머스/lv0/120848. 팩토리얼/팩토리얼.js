function solution(n) {
    let num = 0;
    let result = 1;
    
    while (result * (num + 1) <= n) {
        num++;
        result *= num;
    }
    
    return num;
}