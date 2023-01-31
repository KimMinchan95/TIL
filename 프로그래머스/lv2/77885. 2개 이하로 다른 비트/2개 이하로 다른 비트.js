function solution(numbers) {
    return numbers.map(number => {
        if (!(number % 2)) return number + 1;
        
        number = "0" + number.toString(2);
        
        for (let i = number.length - 1; i >= 0; i--) {
            if (number[i] === '0') return parseInt(`${number.slice(0, i)}10${number.slice(i+2)}`, 2);
        }
    });
}