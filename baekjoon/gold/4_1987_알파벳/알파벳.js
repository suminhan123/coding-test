const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt"),
    "utf8",
  )
  .trim()
  .split(/\r?\n/);

const [r, c] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 0; i < r; i++) {
  graph.push(input[1 + i].trim().split(""));
}
function getASCIICode(str) {
  return str.charCodeAt() - 65;
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visited = new Array(26).fill(false);

let answer = -1;

function search(x, y, depth) {
  answer = Math.max(answer, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
      if (!visited[getASCIICode(graph[nx][ny])]) {
        visited[getASCIICode(graph[nx][ny])] = true;
        search(nx, ny, depth + 1);
        visited[getASCIICode(graph[x][y])] = false;
      }
    }
  }
}
visited[getASCIICode(graph[0][0])] = true;
search(0, 0, 1);

console.log(answer);
