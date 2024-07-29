// 실버 2 : https://www.acmicpc.net/problem/18352

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m, k, start] = input[0].split(" ").map(Number);
input.shift();

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let cur = 0;

    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild][0] < this.heap[leftChild][0]
          ? rightChild
          : leftChild;

      //루트 노드의 값이 더 큰 경우 swap
      if (x[0] > this.heap[smallerChild][0]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[cur],
        ];
        cur = smallerChild;
      } else {
        break;
      }
    }
  }
}

let distance = Array.from({ length: n + 1 }, () => Infinity);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push([y, 1]);
}

distance[start] = 0;
let q = new PriorityQueue();
q.push([0, start]);

while (!q.empty()) {
  const [dist, now] = q.pop();

  if (dist > distance[now]) {
    continue;
  }

  for (const node of graph[now]) {
    const cost = dist + node[1];
    if (cost < distance[node[0]]) {
      distance[node[0]] = cost;
      q.push([cost, node[0]]);
    }
  }
}

let result = [];

distance.forEach((value, index) => {
  if (k === value) {
    result.push(index);
  }
});

if (result.length > 0) {
  for (const r of result) {
    console.log(r);
  }
} else {
  console.log(-1);
}
