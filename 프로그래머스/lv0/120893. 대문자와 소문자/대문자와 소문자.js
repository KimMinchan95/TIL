function solution(my_string) {
    return [...my_string].map(string => {
        if (string.match(/[a-z]/)) {
            return string.toUpperCase();
        }
        return string.toLowerCase();
    }).join('')
}