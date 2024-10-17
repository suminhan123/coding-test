const binarySearch = (array, target, start, end) => {
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      return mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return NaN;
};
