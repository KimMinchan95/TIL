function solution(num_list, n) {
    return num_list.reduce((acc, cur, idx) => {
        if (!(idx % n)) acc.push(cur); 
        
        return acc;
    }, [])
}