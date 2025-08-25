function solution(cards1, cards2, goal) {
    return goal.reduce((acc, cur) => {
        if (cards1[0] === cur) {
            cards1.shift();
            return acc;
        }
        
        if (cards2[0] === cur) {
            cards2.shift();
            return acc;
        }
        return 'No';
    }, 'Yes');
}