const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
let visited = Array.from({ length: 9 }, () => false);
let q = [];
const bfs = (start) => {
  q.push(start);
  visited[start] = true;

  while (q.length) {
    const v = q.shift();
    console.log("방문", v);

    for (const node of graph[v]) {
      if (!visited[node]) {
        visited[node] = true;
        q.push(node);
      }
    }
  }
};
bfs(1);
