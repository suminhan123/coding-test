// 골드 4 : https://www.acmicpc.net/problem/2636
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const inputArr = input.map((value) => value.split(" ").map(Number));

const [n, m] = inputArr.shift();

let graph = [];

for (let i = 0; i < n; i++) {
  graph.push(inputArr[i]);
}

let q = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (row, column, v, check) => {
  q.push([row, column]);
  v[row][column] = true;

  while (q.length) {
    const [x, y] = q.shift();
    let nx = 0;
    let ny = 0;
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (graph[nx][ny] === 0 && !v[nx][ny]) {
          q.push([nx, ny]);
          v[nx][ny] = true;
        }

        if (
          graph[nx][ny] === 1 &&
          !check.some((value) => value[0] === nx && value[1] === ny)
        ) {
          check.push([nx, ny]);
        }
      }
    }
  }
};
const updateMeltGraph = (check) => {
  for (idx of check) {
    const [x, y] = idx;
    graph[x][y] = 0;
  }
};

let result = 0;
let beforeMelt = 0;

while (true) {
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let checkIdx = [];

  bfs(0, 0, visited, checkIdx);
  if (checkIdx.length === 0) {
    console.log(result);
    console.log(beforeMelt);
    return;
  }
  if (checkIdx.length > 0) {
    result += 1;
    beforeMelt = checkIdx.length;
  }

  updateMeltGraph(checkIdx);
}
