const DISCOUNTS_RATE = [10, 20, 30, 40];

function solution(users, emoticons) {
    const discounts = [];
    
    const getDiscounts = (arr) => {
        if (arr.length === emoticons.length) {
            discounts.push(arr);
            return;
        }
        
        DISCOUNTS_RATE.forEach(discount => {
            const slicedArr = arr.slice();
            
            slicedArr.push(discount);
            
            getDiscounts(slicedArr);
        });
    }
    
    getDiscounts([]);
    
    const ratesArr = discounts.map(discount => discount.map((rate, idx) => [rate, emoticons[idx] * (100 - rate) / 100]));
    
    const results = [];
        
    ratesArr.forEach(rates => {
        const memo = {
            subscribe: 0,
            moneyEarned: 0,
        }
        
        users.forEach(user => {
            let [buyRate, money] = user.slice();
            
            rates.forEach(([rate, price]) => {
                if (buyRate <= rate) {
                    money -= price;
                }
            });
            
            if (money <= 0) {
                memo.subscribe++
            } else {
                memo.moneyEarned += user[1] - money;
            }
        });
        
        results.push([memo.subscribe, memo.moneyEarned]);
    });
        
    results.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);
    
    return results[0];
}