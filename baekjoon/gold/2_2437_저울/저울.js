// https://www.acmicpc.net/problem/2437

// const texts = [7, [3, 1, 6, 2, 7, 30, 1]];

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const texts = fs.readFileSync(file).toString().trim().split("\n");

const solution = (n, graph) => {
  graph.sort((a, b) => a - b);

  let ans = [];
  let arrSum = [];
  const search = (start) => {
    if (ans.length === n) {
      return;
    }
    for (let i = start; i < n; i++) {
      ans.push(graph[i]);
      const ansSum = ans.reduce((prev, cur) => (cur += prev), 0);
      if (!arrSum.includes(ansSum)) {
        arrSum.push(ansSum);
      }

      search(i + 1);
      ans.pop();
    }
  };
  search(0);
  arrSum.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < Infinity; i++) {
    if (!arrSum.includes(i)) {
      result = i;
      break;
    }
  }
  return result;
};

const n = +texts[0];
let graph = texts[1].split(" ").map(Number);

console.log(solution(n, graph));
