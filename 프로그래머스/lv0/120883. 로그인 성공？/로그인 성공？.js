function solution(id_pw, db) {
    let result = 'fail';
    
    const [correctId, correctPw] = id_pw;
    
    for (let i = 0; i < db.length; i++) {
        const [id, pw] = db[i];
        
        if (id === correctId && pw === correctPw) {
            result = 'login';
            break;
        }
        
        if (id === correctId && pw !== correctPw) {
            result = 'wrong pw';
            continue;
        }
    }
    
    return result;
}