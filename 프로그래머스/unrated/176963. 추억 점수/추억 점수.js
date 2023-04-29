function solution(name, yearning, photo) {
    const memo = {};
    
    name.forEach((person, idx) => {
       memo[person] = yearning[idx];
    });
    
    return photo.map(arr => arr.reduce((acc, cur) =>  acc + (memo[cur] || 0), 0));
}