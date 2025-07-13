function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i;
    }
    return totalPrice > money ? Math.abs(money - totalPrice) : 0;
}