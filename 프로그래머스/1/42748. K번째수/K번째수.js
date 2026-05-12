function solution(array, commands) {
    return commands.reduce((acc, [i,j,k]) => {
        const temp = array.slice(i - 1, j);
        temp.sort((a, b) => a - b);
        return [...acc, temp[k - 1]];
    }, []);
}