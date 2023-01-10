function solution(s) {
    const letters = new Map();
    
    return [...s].map((string, idx) => {
        const letterIdx = letters.get(string);
        letters.set(string, idx);
        
        return letterIdx === undefined ? -1 : idx - letterIdx;
    });
}