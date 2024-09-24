const INF = Number(Infinity);
const n = 4;
const m = 7;
const texts = [
  [1, 2, 4],
  [1, 4, 6],
  [2, 1, 3],
  [2, 3, 7],
  [3, 1, 5],
  [3, 4, 4],
  [4, 3, 2],
];
let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
for (const text of texts) {
  const [a, b, c] = text;
  graph[a][b] = c;
}

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i === j) {
      graph[i][j] = 0;
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
console.log(graph);
