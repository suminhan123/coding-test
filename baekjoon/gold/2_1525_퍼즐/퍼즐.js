// 골드 2 https://www.acmicpc.net/problem/1525

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let puzzle = "";
for (let i = 0; i < 3; i++) {
  puzzle += input[i].split(" ").join("");
}

let visited = {};
visited[puzzle] = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = () => {
  let q = [];
  q.push(puzzle);

  while (q.length > 0) {
    const newPuzzle = q.shift();
    const count = visited[newPuzzle];

    if (newPuzzle === "123456780") {
      return count;
    }

    const idx = newPuzzle.indexOf("0");
    const xIdx = Math.floor(idx / 3);
    const yIdx = idx % 3;

    for (let i = 0; i < 4; i++) {
      const nx = xIdx + dx[i];
      const ny = yIdx + dy[i];

      if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
        const puzzleList = newPuzzle.split("");
        puzzleList[xIdx * 3 + yIdx] = puzzleList[nx * 3 + ny];
        puzzleList[nx * 3 + ny] = 0;
        const newString = puzzleList.join("");
        if (!visited[newString]) {
          q.push(newString);
          visited[newString] = count + 1;
        }
      }
    }
  }

  return -1;
};

console.log(bfs());
