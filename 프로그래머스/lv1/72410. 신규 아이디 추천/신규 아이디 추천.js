function solution(new_id) {
    // 1 단계
    let id = new_id.toLowerCase();
    
    // 2 단계
    id = id.replace(/[^\w\-\_\.]/g, '');
    
    // 3 단계
    id = id.replace(/\.{2,}/g, '.');
    
    // 4 단계
    id = id.replace(/^\./, '');
    id = id.replace(/\.$/, '');
    
    // 5 단계
    if (!id) id = 'a';

    // 6 단계
    id = id.slice(0, 15);
    id = id.replace(/\.$/, '');
    
    // 7 단계
    if (id.length < 3) {
        id = id.padEnd(3, id[id.length - 1]);
    }
    
    return id;
}