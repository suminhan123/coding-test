// https://www.acmicpc.net/problem/2437

// const texts = [7, [3, 1, 6, 2, 7, 30, 1]];

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const texts = fs.readFileSync(file).toString().trim().split("\n");

const solution = (n, graph) => {
  graph.sort((a, b) => a - b);

  let end = 0;

  for (let i = 0; i < n; i++) {
    if (graph[i] > end + 1) {
      return end + 1;
    } else {
      end += graph[i];
    }
  }
  return end + 1;
};
const n = +texts[0];
let graph = texts[1].split(" ").map(Number);
console.log(solution(n, graph));
