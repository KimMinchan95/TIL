function solution(s, skip, index) {
    const ALPAHBET = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
    for(let i = 0; i < s.length; i++){
        const answer = [];
        const findIndex = ALPAHBET.indexOf(s[i]);
        const num = index;
        for(let j = findIndex + 1; j <= ALPAHBET.length; j++) {
            if(j === 26) j = 0;

            if(num === answer.length) break;

            if(skip.includes(ALPAHBET[j])) continue;

            answer.push(ALPAHBET[j]);
        }
                    console.log(answer)
        result.push(answer.pop());
    }
    return result.join("");
}