function solution(cards1, cards2, goal) {
    let result = 'Yes';
    
    goal.forEach(cur => {
        if (cards1[0] === cur) {
            cards1.shift();
            return;
        }
        
        if (cards2[0] === cur) {
            cards2.shift();
            return;
        }
        
        result = 'No';
    });
    
    return result;
}