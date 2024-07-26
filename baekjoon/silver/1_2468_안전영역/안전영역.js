// 실버 1 : https://www.acmicpc.net/problem/2468

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input[0]);
let graph = [];
let rainCnt = 0;
let maxRainCnt = 0;

for (let i = 1; i <= n; i++) {
  const newlist = input[i].split(" ").map(Number);
  graph.push(newlist);
  rainCnt = Math.min(rainCnt, ...newlist);
  maxRainCnt = Math.max(maxRainCnt, ...newlist);
}

let result = 0;

let visited = Array.from({ length: n }, () => Array(n).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let q = [];

const bfs = (row, column, rain) => {
  q.push([row, column]);
  visited[row][column] = true;
  let x = 0;
  let y = 0;
  let nx = 0;
  let ny = 0;
  while (q.length) {
    [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < n && ny < n && nx >= 0 && ny >= 0) {
        if (graph[nx][ny] > rain && !visited[nx][ny]) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
};

const notRainRound = (rain) => {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && graph[i][j] > rain) {
        bfs(i, j, rain);
        cnt += 1;
      }
    }
  }
  return cnt;
};
for (let i = 0; i < maxRainCnt - rainCnt + 1; i++) {
  visited = Array.from({ length: n }, () => Array(n).fill(false));
  let newResult = notRainRound(rainCnt + i);

  if (newResult > result) {
    result = newResult;
  }
}

console.log(result);
