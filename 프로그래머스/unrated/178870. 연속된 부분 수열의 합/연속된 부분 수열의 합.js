function solution(sequence, k) {
    const arr = [];
    
    sequence.reduce((acc, cur, i) => {
        let [left, sum] = acc;
        
        sum += cur;
    
        while (sum > k) {
            sum -= sequence[left];
            left += 1;
        }
        
        if (sum === k) {
            arr.push([left, i]);
        }
         
        return [left, sum];
    }, [0, 0]);
    
    arr.sort(([firS, firE], [secS, secE]) => (firE - firS) - (secE - secS));
    
    return arr[0];
}