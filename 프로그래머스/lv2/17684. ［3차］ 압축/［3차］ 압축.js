const list = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function solution(msg) {
    const result = [];
    
    const words = list.reduce((acc, word, idx) => {
        acc[word] = idx;
        
        return acc;
    }, {});
    
    const last = [...msg].reduce(({prevWords, pointer}, word) => {
        let curWords = prevWords + word;
        
        if (!words[curWords]) {
            words[curWords] = pointer++;
            result.push(words[prevWords]);
            curWords = word;
        }
        
        return {prevWords: curWords, pointer};
    }, {prevWords: '', pointer: 27}).prevWords;
    
    result.push(words[last]);

    return result;
}