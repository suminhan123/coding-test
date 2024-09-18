// https://www.acmicpc.net/problem/1417
// 1번 : 5표, 2번: 7표, 3번 : 7표
// 2번을 1명과 3번 후보 1명을 매수하면 다솜이 1번이 당선될 수 있다
// 매수해야하는 사람의 최솟값
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
let [n, ...texts] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((value) => Number(value));

let result = 0;
let dasom = texts[0];

while (true) {
  let maxVote = Math.max(...texts.slice(1));
  if (maxVote < dasom) {
    break;
  }
  let idx = texts.findIndex((value, index) => index !== 0 && value === maxVote);
  texts.splice(idx, 1, texts[idx] - 1);
  texts[0] = dasom + 1;
  dasom = texts[0];
  result += 1;
}
console.log(result);
