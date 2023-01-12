function solution(num_list) {
    return num_list.reduce((result, num) => {
        num % 2 ? result[1]++ : result[0]++;
        return result;
    }, [0, 0])
}