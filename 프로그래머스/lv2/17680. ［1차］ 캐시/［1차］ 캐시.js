function solution(cacheSize, cities) {
    return cities.reduce(({count, caches}, cur) => {
        const city = cur.toLowerCase();
        
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
                for (const cache of caches.entries()) {
                    LRU = cache[1] > LRU[1] ? cache : LRU;
                }
                caches.delete(LRU[0]);
            }
        }
        
        caches.forEach((value, key) => {
           caches.set(key, value + 1); 
        });
        
        return {count, caches};
    }, {
        count: 0,
        caches: new Map(),
    }).count;
}