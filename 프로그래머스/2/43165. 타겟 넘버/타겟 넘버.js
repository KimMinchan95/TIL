function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    
    const plus = (nums) => {
        return nums.reduce((acc, cur) => acc + cur, 0);
    }
    
    const fn = (p) => {
        if (p.length === len) {
            if (target === plus(p))answer++;
            return;
        }

        const pc = p.concat([numbers[p.length]]);
        const mc = p.concat([-numbers[p.length]]);
        fn(pc);
        fn(mc);
    }
    fn([]);
    
    return answer;
}