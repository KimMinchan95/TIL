const words = {};

for (let i = 65; i <= 98; i++) {
    words[String.fromCharCode(i)] = i - 64;
}

function solution(msg) {
    const result = [];
    
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