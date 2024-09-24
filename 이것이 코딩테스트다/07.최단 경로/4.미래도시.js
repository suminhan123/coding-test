const texts = [
  [5, 7],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
  [4, 5],
];

const [n, m] = texts.shift();
const [x, k] = texts.pop();
const INF = Number(Infinity);
let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

for (const [a, b] of texts) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}
for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}
let result = graph[1][k] + graph[k][x];

if (result >= INF) {
  console.log(-1);
} else {
  console.log(result);
}
