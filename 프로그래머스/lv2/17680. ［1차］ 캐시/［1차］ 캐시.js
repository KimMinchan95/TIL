function solution(cacheSize, cities) {
    const caches = new Map();
    
    let count = 0;
    
    cities.forEach(current => {
        const city = current.toLowerCase();
        
        const hit = caches.has(city);
        
        if (hit) {
            count++;
            caches.set(city, 0);
        } 
        
        if (!hit) {
            count += 5;
            
            caches.set(city, 0);

            if (caches.size > cacheSize) {
                let LRU = ['', -1];
                for (let cache of caches.entries()) {
                    LRU = cache[1] > LRU[1] ? cache : LRU;
                }
                caches.delete(LRU[0]);
            }
        }
        
        caches.forEach((value, key) => {
           caches.set(key, value + 1); 
        });
    });
    
    return count;
}