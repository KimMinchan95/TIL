function solution(answers) {
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    
    const people = [p1, p2, p3];
    const scores = [0, 0, 0];
    
    for (const [i, answer] of answers.entries()) {
        for (const [j, person] of people.entries()) {
            if (answer !== person[i % person.length]) continue;
            scores[j]++;
        }
    }
    
    const maxScore = Math.max(...scores);
    
    return scores.reduce((acc, cur, idx) => {
        if (cur === maxScore) {
            acc.push(idx + 1);
        }
        
        return acc;
    }, []);
}