function solution(s) {
    const result = [];
    
    const obj = {};
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        
        obj[str] = obj[str] ? ++obj[str] : 1;
    }
    
    for (const [key, value] of Object.entries(obj)) {
        if (value === 1) {
            result.push(key);
        }
    }
    
    return result.sort().join('');
}