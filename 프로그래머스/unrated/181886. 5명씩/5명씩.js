function solution(names) {
    return names.reduce((acc, cur, idx) => {
        if (!(idx % 5)) {
            acc.push(cur);
        }
        
        return acc;
    }, []);
}