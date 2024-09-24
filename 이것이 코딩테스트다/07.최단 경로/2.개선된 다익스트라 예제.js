class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx][0] > this.heap[curIdx][0]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else {
      this.heap[1] = this.heap.pop();

      let curIdx = 1;
      let leftIdx = curIdx * 2;
      let rightIdx = curIdx * 2 + 1;

      while (
        (this.heap[leftIdx] && this.heap[leftIdx][0] < this.heap[curIdx][0]) ||
        (this.heap[rightIdx] && this.heap[rightIdx][0] < this.heap[curIdx][0])
      ) {
        const minIdx =
          !this.heap[rightIdx] || this.heap[leftIdx][0] < this.heap[rightIdx][0]
            ? leftIdx
            : rightIdx;

        this.swap(minIdx, curIdx);
        curIdx = minIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      }
    }

    return min;
  }
}
const n = 6;
const m = 11;
const start = 1;
const INF = Number(Infinity);
// [cost, node] 순으로 저장
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
let distance = Array(n + 1).fill(INF);

const dijkstra = (start) => {
  const hp = new MinHeap();
  distance[start] = 0;
  hp.push([0, start]);

  while (hp.size() > 0) {
    const [dist, cur] = hp.pop();
    if (dist > distance[cur]) {
      continue;
    }
    for (const i of graph[cur]) {
      const cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        hp.push([cost, i[0]]);
      }
    }
  }
};
dijkstra(start);
console.log(distance);
