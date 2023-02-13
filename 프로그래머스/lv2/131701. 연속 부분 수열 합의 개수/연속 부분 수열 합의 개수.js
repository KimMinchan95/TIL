function solution(elements) {
    const set = new Set();
    
    const dobuleElements = elements.concat(elements);
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += dobuleElements[i + j];
            set.add(sum);
        }
    }
    
    return set.size;
}