const submit = "/dev/stdin";
const inputCol = require("fs").readFileSync(submit).toString().trim().split("\n");

const [curHour, curMin] = inputCol[0].split(" ").map(Number);
const targetMin = Number(inputCol[1]);

const totalMin = curHour * 60 + curMin;

const resultHour = Math.floor((totalMin + targetMin) / 60) % 24;
const resultMin = (totalMin + targetMin) % 60;

console.log(`${resultHour} ${resultMin}`);