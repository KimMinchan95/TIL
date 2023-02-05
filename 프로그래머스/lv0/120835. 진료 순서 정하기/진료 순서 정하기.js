function solution(emergency) {
    const sorted = emergency.slice().sort((a, b) => b - a);
    
    return emergency.map(cur => sorted.findIndex(value => value === cur) + 1);
}