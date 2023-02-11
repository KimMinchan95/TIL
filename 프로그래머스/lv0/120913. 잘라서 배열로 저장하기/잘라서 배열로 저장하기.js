function solution(my_str, n) {
    const answer = [];
    
    let memo = '';
    
    for (let i = 0; i < my_str.length; i++) {
        memo += my_str[i];
        
        if (my_str.length - 1 === i) {
            answer.push(memo);
            break;
        }
        
        if (memo.length === n) {
            answer.push(memo);
            memo = '';
        }
    }
        
    return answer;
}