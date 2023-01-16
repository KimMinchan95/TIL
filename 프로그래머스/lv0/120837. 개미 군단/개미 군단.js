const attacks = [5, 3, 1];

function solution(hp) {
    let result = 0;
    
    while (hp) {
        for (let i = 0; i < 3; i ++) {
            const attack = attacks[i];
            if (hp - attack >= 0) {
                hp -= attack;
                result++;
                break;
            }
        }
    }
    
    return result;
}