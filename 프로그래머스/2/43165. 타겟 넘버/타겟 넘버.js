function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    
    const fn = (c, cnt) => {
        if (cnt === len) {
            if (target === c)answer++;
            return;
        }

        fn(c + numbers[cnt], cnt + 1);
        fn(c - numbers[cnt], cnt + 1);
    }
    fn(0, 0);
    
    return answer;
}