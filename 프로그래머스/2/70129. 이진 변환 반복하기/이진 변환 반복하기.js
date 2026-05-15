function solution(s) {
    let count = 0;
    let eliminated = 0;
    
    while (s !== '1') {
        count++;
        const next = [...s].filter(c => c === '1');
        eliminated += s.length - next.length;
        s = next.length.toString(2);
    }
    
    return [count, eliminated];
}