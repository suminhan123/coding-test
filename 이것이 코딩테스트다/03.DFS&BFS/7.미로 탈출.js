// 최단 경로 => BFS

const text = ["101010", "111111", "000001", "111111", "111111"];
const graph = text.map((t) => t.split("").map(Number));

const n = graph.length;
const m = graph[0].length;

let q = [];
q.push([0, 0]);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[0][0] = true;

while (q.length > 0) {
  const [x, y] = q.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (graph[nx][ny] === 1 && !visited[nx][ny]) {
        q.push([nx, ny]);
        graph[nx][ny] = graph[x][y] + 1;
        visited[nx][ny] = true;
      }
    }
  }
}
console.log(graph[n - 1][m - 1]);
