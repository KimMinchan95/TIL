function solution(arr)
{
    const list = [];
    
    arr.forEach((num) => {
        if (num === list[list.length - 1]) {
            return;
        }
        list.push(num);
    });
    return list;
}