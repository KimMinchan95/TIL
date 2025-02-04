const word = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    let result = 0;
    
    babbling.forEach(b => {
        for (const w of word) {
            if (b.includes(w.repeat(2))) break;
            if (!b.match(w)) continue;
            b = b.replace(new RegExp(w, 'g'), ' ');
        }
        
        if (!b.replace(/ /g, '')) result++;
    });
    
    return result;
}