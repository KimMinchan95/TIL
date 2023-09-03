function solution(a, b) {
    const isAOdd = !!(a % 2);
    const isBOdd = !!(b % 2);
    
    if (isAOdd && isBOdd) return a**2 + b**2;
    if (isAOdd || isBOdd) return (a + b) * 2;
    return Math.abs(a - b);
}