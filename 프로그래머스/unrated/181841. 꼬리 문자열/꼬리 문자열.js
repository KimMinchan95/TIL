function solution(str_list, ex) {
    return str_list.reduce((acc, cur) => {
        if (cur.indexOf(ex) === -1) {
            acc += cur;
        }
        
        return acc;
    }, '');
}