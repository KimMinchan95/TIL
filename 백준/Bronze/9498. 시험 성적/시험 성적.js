const submit = "/dev/stdin";
const input = Number(require("fs").readFileSync(submit).toString());
if (input >= 90) {console.log('A'); return;};
if (input >= 80) {console.log('B'); return;};
if (input >= 70) {console.log('C'); return;};
if (input >= 60) {console.log('D'); return;};
console.log('F');
