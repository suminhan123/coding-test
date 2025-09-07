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

let q = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
q.push([0, 0, [graph[0][0]]]);

let answer = -1;
while (q.length) {
  const [x, y, alpahSet] = q.shift();
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
      if (!alpahSet.includes(graph[nx][ny])) {
        q.push([nx, ny, alpahSet.concat([graph[nx][ny]])]);
        answer = alpahSet.length + 1;
      }
    }
  }
}
console.log(answer);
