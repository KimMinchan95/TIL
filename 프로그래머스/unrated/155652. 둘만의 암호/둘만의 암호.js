const ALPHABET_LIST = 'abcdefghijklmnopqrstuvwxyz'.split('');

function solution(s, skip, index) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        let idx = ALPHABET_LIST.findIndex(cur => cur === str);
        let last = index;
        while (last) {
            idx++;
            if (idx === 26) idx = 0;
            if (skip.includes(ALPHABET_LIST[idx])) continue;
            last--;
        }
        result += ALPHABET_LIST[idx];
    }
    
    return result;
}