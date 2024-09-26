const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const texts = fs.readFileSync(file).toString().trim().split("\n");

const n = texts.shift();
const m = texts.shift();
const INF = Number(Infinity);
let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}
for (const [a, b, c] of texts) {
  if (graph[a][b] > c) {
    graph[a][b] = c;
  }
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
for (let i = 1; i < n + 1; i++) {
  console.log(
    graph[i]
      .slice(1)
      .map((value) => {
        if (value === INF) {
          return [0];
        }
        return value;
      })
      .flat()
      .join(" ")
  );
}
