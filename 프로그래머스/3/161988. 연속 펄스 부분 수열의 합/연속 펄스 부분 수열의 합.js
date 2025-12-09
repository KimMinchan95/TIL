function solution(sequence) {
    const len = sequence.length;
    
    const prefixNum = new Array(len + 1).fill(0);
    
    for (let i = 1; i <= len; i++) {
        prefixNum[i] = prefixNum[i - 1] + sequence[i - 1] * Math.pow(-1, i);
    }
    
    const max = prefixNum.reduce((a, b) => Math.max(a, b));
    const min = prefixNum.reduce((a, b) => Math.min(a, b));

    return max - min;
}