function solution(numbers) {
    const num = [...numbers];
    
    const set = new Set();
    
    const pick = (bucket, rest) => {
        const num = Number(bucket.join(''))
        if (num !== 0 && !isNaN(num)) {
            set.add(num);
        }
        
        for (let i = 0; i < rest.length; i++) {
            const copied = [...rest];
            const nextRest = copied.filter((_, idx) => idx !== i);
            pick([...bucket, copied[i]], nextRest);
        }
    }
    pick([], num);
    
    const answer = [];
    const isAnswer = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if ((num % i) === 0) {
                return false
            }
        }
        return true;
    }
    set.forEach(value => {
        if (isAnswer(value)) {
            answer.push(value);
        }
    });
    
    return answer.length;
}