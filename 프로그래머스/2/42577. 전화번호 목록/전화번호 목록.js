function solution(phone_book) {
    const sort = phone_book.sort();
    
    for(let i = 0; i < sort.length - 1; i++) {
        if (sort[i] === sort[i + 1].slice(0, sort[i].length)) return false;
    }
    
    return true;
}