const submit = "/dev/stdin";
const inputCol = require("fs")
  .readFileSync(submit)
  .toString()
  .trim()
  .split("\n");

inputCol.forEach((item, i) => {
  if (i === 0) return;
  const [a, b] = item.split(" ").map(Number);
  console.log(a + b);
});
