/**
 * 최소 힙 자바스크립트로 직접 구현하기
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  empty() {
    return this.heap.length === 0;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleup();
  }

  bubbleup() {
    // 새로운 노드가 추가된 위치
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx][0] <= this.heap[index][0]) break;
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.bubbledown();
    return value;
  }

  bubbledown() {
    const root = this.peek();
    const n = this.heap.length;
    let idx = 0;
    // 현재 index의 오른쪽 자식도 존재할 때까지
    while (2 * idx + 1 < n) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = leftIdx + 1;
      const smallerIdx =
        rightIdx < n && this.heap[rightIdx][0] < this.heap[leftIdx][0]
          ? rightIdx
          : leftIdx;

      if (root[0] > this.heap[smallerIdx][0]) {
        this.swap(idx, smallerIdx);
        idx = smallerIdx;
      } else {
        break;
      }
    }
  }
}

const hp = new MinHeap();
hp.push([0, 1]);
hp.push([5, 4]);
hp.push([8, 3]);
hp.push([4, 4]);
hp.push([2, 4]);
hp.push([1, 4]);

console.log(hp.pop());
console.log(hp.pop());
console.log(hp.pop());
console.log(hp);
