function solution(my_string, n) {
    return [...my_string].map(string => string.repeat(n)).join('');
}