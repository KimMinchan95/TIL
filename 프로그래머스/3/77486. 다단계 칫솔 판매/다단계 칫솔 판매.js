function solution(enroll, referral, seller, amount) {
    const parent = {};
    
    enroll.forEach((enr, i) => {
        const ref = referral[i];
        parent[enr] = ref
    });
    
    const total = Object.fromEntries(enroll.map(en => [en, 0]));
    
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let name = seller[i];
        
        while (money >= 1 && name !== '-') {
            let less = Math.floor(money / 10);
            let profit = money - less;
            
            total[name] += profit;
            money = less;
            name = parent[name];
        }
    }
    
    return enroll.map(name => total[name]);
}