function solution(array, commands) {
    return commands.reduce((acc, cur) => {
        const [s, e, i] = cur;
        acc.push(([...array].slice(s - 1, e).sort((a, b) => a - b).at(i - 1)));
        return acc;
    }, []);
}