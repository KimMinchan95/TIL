function solution(elements) {
    const set = new Set();
    
    const dobuleElements = elements.concat(elements);
    
    for (let pick = 1; pick <= elements.length; pick++) {
        for (let i = 0; i < elements.length; i++) {
            let sum = 0;
            
            for (let j = i; j < pick + i; j++) {
                sum += dobuleElements[j];
            }
            
            set.add(sum);
        }
    }
    
    return set.size;
}