function solution(my_string, index_list) {
    return index_list.reduce((acc, cur) => {
        const str = my_string[cur];
        return acc + str;
    }, '');
}