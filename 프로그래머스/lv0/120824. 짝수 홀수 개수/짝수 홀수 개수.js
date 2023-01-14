function solution(num_list) {
    return num_list.reduce((result, num) => {
        result[num % 2]++;
        return result;
    }, [0, 0])
}