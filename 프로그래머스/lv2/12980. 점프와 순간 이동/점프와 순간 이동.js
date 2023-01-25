function solution(n) {
    let battery = 0;
    
    while (n) {
        if (n % 2) {
            n -= 1;
            battery += 1;
            continue;
        }
        n /= 2;
    }
    
    return battery;
}