function solution(num_list) {
    return Number(num_list.reduce((acc, cur) => acc * cur, 1) < num_list.reduce((acc, cur) => acc + cur, 0)**2);
}