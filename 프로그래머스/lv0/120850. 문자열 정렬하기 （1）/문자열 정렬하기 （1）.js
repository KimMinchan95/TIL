function solution(my_string) {
    return [...my_string].filter(string => string.match(/[0-9]/)).map(Number).sort();
}