const ALPHABET_LIST = 'abcdefghijklmnopqrstuvwxyz'.split('');

function solution(s, skip, index) {
    return [...s].map(str => {
        let idx = ALPHABET_LIST.findIndex(cur => cur === str);
        let last = index;
        while (last) {
            idx++;
            idx %= 26;
            if (skip.includes(ALPHABET_LIST[idx])) continue;
            last--;
        }
        return ALPHABET_LIST[idx];
    }).join('');
}