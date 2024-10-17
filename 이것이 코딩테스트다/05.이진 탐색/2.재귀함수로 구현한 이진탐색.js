const texts = [10, 7, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]];

const n = texts.shift();
const target = texts.shift();
const array = texts.pop();

const binarySearch = (array, target, start, end) => {
  if (start > end) {
    return NaN;
  }
  mid = Math.floor((start + end) / 2);
  if (array[mid] === target) {
    return mid + 1;
  } else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, end);
  } else {
    return binarySearch(array, target, start, mid - 1);
  }
};
console.log(binarySearch(array, target, 0, n));
