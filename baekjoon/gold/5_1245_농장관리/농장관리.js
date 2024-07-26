// 골드 5 : https://www.acmicpc.net/problem/1245

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let graph = [];
let visited = Array.from({ length: n }, () => Array(m).fill(false));
for (let i = 1; i < n + 1; i++) {
  const inputList = input[i].split(" ").map(Number);
  graph.push(inputList);
}

// 해당 문제는 총 8가지 방향
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

let q = [];

const bfs = (row, column) => {
  visited[row][column] = true;
  q.push([row, column]);
  let flag = true;
  let nx = 0;
  let ny = 0;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 9; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (graph[nx][ny] > graph[x][y]) {
          flag = false;
        } else {
          if (!visited[nx][ny]) {
            if (graph[nx][ny] === graph[x][y]) {
              q.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }
      }
    }
  }
  return flag;
};

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      if (bfs(i, j)) {
        result += 1;
      }
    }
  }
}
console.log(result);
