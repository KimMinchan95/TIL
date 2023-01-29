const list = [];

for (let i = 65; i <= 98; i++) {
    list.push(String.fromCharCode(i));
}

function solution(msg) {
    const result = [];
    
    const words = list.reduce((acc, word, idx) => {
        acc[word] = idx + 1;
        
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