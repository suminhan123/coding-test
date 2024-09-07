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

const dfs = (v) => {
  console.log("방문", v);

  visited[v] = true;

  for (const node of graph[v]) {
    if (!visited[node]) {
      dfs(node);
    }
  }
};

dfs(1);
