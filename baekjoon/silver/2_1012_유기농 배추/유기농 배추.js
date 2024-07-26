// 실버 2 : https://www.acmicpc.net/problem/1012

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = +input.shift();

const inputArr = input.map((v) => v.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (x, y, n, m, graph) => {
  let nx = 0;
  let ny = 0;
  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (graph[nx][ny] == 1) {
        graph[nx][ny] = -1;
        dfs(nx, ny, n, m, graph);
      }
    }
  }
};

for (let i = 0; i < t; i++) {
  let [m, n, k] = inputArr.shift();
  let graph = Array.from({ length: n }, () => Array(m).fill(0));
  while (k > 0) {
    k--;
    const [y, x] = inputArr.shift();
    graph[x][y] = 1;
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j, n, m, graph);
        result += 1;
      }
    }
  }
  console.log(result);
}
