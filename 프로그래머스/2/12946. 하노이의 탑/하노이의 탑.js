function solution(n) {
    const result = [];

    const func = (n, start, to, sub) => {
        if (n === 1) {
            result.push([start, to]);
            return;
        }
        
        func(n - 1, start, sub, to);
        result.push([start, to]);
        func(n - 1, sub, to, start);
    };
    
    func(n, 1, 3, 2);
    
    return result;
}