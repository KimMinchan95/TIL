function solution(my_string) {
    return [...my_string].reduce((acc, string) => {
        const number = Number(string);
        if (number) acc += number;
        return acc;
    }, 0)
}