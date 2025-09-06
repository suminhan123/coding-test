const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : path.join(__dirname, "input.txt"),
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [n, k] = input.shift();
let container = input.shift();

const SIZE = 2 * n;

let start = 0;
const phys = (i) => (start + i) % SIZE;
let zeroCnt = container.reduce((a, v) => a + (v === 0), 0);
// 해당 칸에 로봇이 올라와 있는지
const occ = Array(SIZE).fill(false);
let answer = 0;

while (true) {
  answer++;

  // 1) 회전: 포인터만 이동
  start = (start - 1 + SIZE) % SIZE;
  const up = phys(0);
  const down = phys(n - 1);
  if (occ[down]) occ[down] = false;

  // 2) 로봇 이동: 내리는 자리 앞부터 역순(논리 n-2 → 0)
  for (let i = n - 2; i >= 0; i--) {
    const from = phys(i);
    const to = phys(i + 1);
    if (occ[from] && !occ[to] && container[to] > 0) {
      occ[from] = false;
      if (to !== down) occ[to] = true; // 내리는 자리면 즉시 내림
      container[to]--;
      if (container[to] === 0) zeroCnt++;
    }
  }

  // 혹시 이동으로 내리는 자리에 로봇이 올라왔다면 제거
  if (occ[down]) occ[down] = false;

  // 3) 올리는 자리에서 새 로봇 올리기
  if (container[up] > 0 && !occ[up]) {
    occ[up] = true;
    container[up]--;
    if (container[up] === 0) zeroCnt++;
  }

  if (zeroCnt >= k) break;
}
console.log(answer);
