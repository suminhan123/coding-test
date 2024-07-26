//실버5: https://www.acmicpc.net/problem/1439

const s = require("fs").readFileSync("/dev/stdin").toString().trim();

let result_zero = 0;
let result_one = 0;

const check_zero = s.split("1");

check_zero.forEach((value) => {
  if (value !== "") result_zero += 1;
});
const check_one = s.split("0");
check_one.forEach((value) => {
  if (value !== "") result_one += 1;
});

if (result_one < result_zero) {
  console.log(result_one);
} else {
  console.log(result_zero);
}
