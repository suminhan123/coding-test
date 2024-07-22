// 실버 3 : https://www.acmicpc.net/problem/2606

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const computers = Number(input[0]);
const count = Number(input[1]);

let graph = Array.from({ length: computers + 1 }, () => []);
for (let i = 2; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = Array(computers + 1).fill(false);
let q = [];
let result = 0;
q.push(1);
visited[1] = true;

while (q.length) {
  const x = q.shift();
  result += 1;
  for (const i of graph[x]) {
    if (!visited[i]) {
      q.push(i);
      visited[i] = true;
    }
  }
}
console.log(result - 1);
