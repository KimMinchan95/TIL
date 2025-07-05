function solution(todo_list, finished) {
    return todo_list.reduce((acc, cur, i) => {
        if (!finished[i]) {
            acc.push(cur);
        }
        return acc;
    }, []);
}