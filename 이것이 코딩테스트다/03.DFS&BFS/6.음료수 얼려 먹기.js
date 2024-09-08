// 조합 => DFS
const text = ["00110", "00011", "11111", "00000"];

const graph = text.map((t) => t.split("").map(Number));
let result = 0;
const n = graph.length;
const m = graph[0].length;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (x, y) => {
  graph[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (graph[nx][ny] === 0) {
        dfs(nx, ny);
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) {
      dfs(i, j);
      result += 1;
    }
  }
}
console.log(result);
