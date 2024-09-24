const INF = Number(Infinity);
const n = 6;
const m = 11;
let visited = Array(n + 1).fill(false);
let distance = Array(n + 1).fill(INF);
const graph = [
  [],
  [
    [2, 2],
    [3, 5],
    [4, 1],
  ],
  [
    [3, 3],
    [4, 2],
  ],
  [
    [2, 3],
    [6, 5],
  ],
  [
    [3, 3],
    [5, 1],
  ],
  [
    [3, 1],
    [6, 2],
  ],
  [],
];

const getSmallesNode = () => {
  let minValue = INF;
  let index = 0;
  for (let i = 1; i < n + 1; i++) {
    if (distance[i] < minValue && !visited[i]) {
      minValue = distance[i];
      index = i;
    }
  }
  return index;
};
const start = 1;
const dijkstra = (start) => {
  visited[start] = true;
  distance[start] = 0;
  for (const i of graph[start]) {
    distance[i[0]] = i[1];
  }

  for (let i = 0; i < n - 1; i++) {
    const now = getSmallesNode();
    visited[now] = true;
    for (const node of graph[now]) {
      const cost = distance[now] + node[1];
      if (distance[node[0]] > cost) {
        distance[node[0]] = cost;
      }
    }
  }
};
dijkstra(1);

for (let i = 1; i < n + 1; i++) {
  if (distance[i] == INF) {
    console.log("INFINITY");
  } else {
    console.log(distance[i]);
  }
}
