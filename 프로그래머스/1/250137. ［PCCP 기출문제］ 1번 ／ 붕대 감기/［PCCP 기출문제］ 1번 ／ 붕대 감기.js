function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    
    const [lastHealth] = attacks.slice(0).reduce(([curHealth, lastAttackTime], attack, _, arr) => {
        const [attackTime, damage] = attack;
        
        const timePassed = attackTime - lastAttackTime - 1;
        const comboCount = Math.floor((timePassed) / t);
        
        curHealth = Math.min(health, curHealth + x * timePassed + y * comboCount);
        
        curHealth -= damage;
        
        if (curHealth < 0) arr.splice(1);
        
        return [curHealth, attackTime];
    }, [health, 0]);
    
    return lastHealth > 0 ? lastHealth : -1;
}