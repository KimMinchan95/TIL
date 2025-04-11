const submit = "/dev/stdin";
const inputRow = require("fs").readFileSync(submit).toString().split(" ");
const inputArr = inputRow.map(Number).sort((a, b) => b - a);
const map = new Map();
inputArr.forEach((num) => {
  map.set(num, (map.get(num) || 0) + 1);
});
if (map.size === 1) {
  console.log(10000 + inputArr[0] * 1000);
}
if (map.size === 2) {
  console.log(
    1000 + (map.get(inputArr[0]) === 1 ? inputArr[1] : inputArr[0]) * 100
  );
}
if (map.size === 3) {
  console.log(inputArr[0] * 100);
}