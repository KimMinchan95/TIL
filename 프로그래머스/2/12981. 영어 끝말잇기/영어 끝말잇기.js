function solution(n, words) {
    const usedWord = new Set([words[0]]);
    let prevLastWord = words[0].at(-1);
    
    for (i = 1; i < words.length; i++) {
        const currentWord = words[i];
        if (!usedWord.has(currentWord) && currentWord[0] === prevLastWord) {
            usedWord.add(currentWord);
            prevLastWord = currentWord.at(-1);
            continue;
        }
        return [i % n + 1, Math.floor(i / n) + 1];
    }
    return [0, 0];
}