function solution(s) {
    return [...s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length).reduce((acc, list) => {
        list.split(',').forEach(n => acc.add(Number(n)));
        return acc;
    }, new Set())];
}