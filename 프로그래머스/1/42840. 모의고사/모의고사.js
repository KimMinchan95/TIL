const isAnswer = (p, i, a) => {
    return p[i % p.length] === a
}
function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const pList = [p1, p2, p3];
    
    const correct = answers.reduce((acc, cur, i) => {
        pList.forEach((p, idx) => {
            if (isAnswer(p, i, cur)) {
                acc[idx]++;
            }
        });
        return acc;
    }, [0, 0, 0]);
    
    const max = Math.max(...correct);
    
    return correct.reduce((acc, cur, i) => {
        if (cur === max) {
            acc.push(i + 1);
        }
        return acc;
    }, []);
}