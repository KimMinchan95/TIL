const vowels = ['A', 'E', 'I', 'O', 'U'];

function solution(word) {
    const alphabets = [];
    
    const dfs = (word, count) => {
        if (count > 5) return;
        alphabets.push(word);
        vowels.forEach(vowel => {
            dfs(word + vowel, count + 1);
        })
    }
    
    dfs("", 0);
    
    return alphabets.findIndex(alphabet => alphabet === word);
}