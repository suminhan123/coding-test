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

const hp = new MinHeap();
hp.push([2, 3]);
hp.push([5, 4]);
hp.push([8, 3]);
hp.push([4, 4]);
hp.push([0, 1]);
hp.push([1, 4]);
console.log(hp);
console.log(hp.pop()); // should return [0, 1]
console.log(hp.pop()); // should return [1, 4]
console.log(hp.pop()); // should return [2, 3]
console.log(hp); // remaining elements
