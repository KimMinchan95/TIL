function solution(num_list, n) {
    const result = [];
    
    num_list.reduce((acc, cur) => {
        acc.push(cur);
                    
        if (acc.length < n) return acc;
        
        result.push(acc);
        return [];
    }, [])
    
    return result;
}