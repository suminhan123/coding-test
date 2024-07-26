// 골드 4 : https://www.acmicpc.net/problem/2665

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = +input.shift();

const inputArr = input.map((value) => value.split("").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let visited = Array.from({ length: n }, () => Array(n).fill(Infinity));
let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(inputArr[i]);
}

let q = [];
q.push([0, 0]);
visited[0][0] = 0;

while (q.length) {
  const [x, y] = q.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
      // 흰 방일 때
      if (graph[nx][ny] === 1 && visited[nx][ny] > visited[x][y]) {
        q.push([nx, ny]);
        visited[nx][ny] = visited[x][y];
      }
      // 검은 방일 때
      if (graph[nx][ny] === 0 && visited[nx][ny] > visited[x][y]) {
        q.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }
}

console.log(visited[n - 1][n - 1]);
