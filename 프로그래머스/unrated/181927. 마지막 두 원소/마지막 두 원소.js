function solution(num_list) {
    const last = num_list.at(-1);
    const beforeLast = num_list.at(-2);
    num_list.push(last > beforeLast ? last - beforeLast : last * 2);
    
    return num_list;
}