const getCombinations = (arr, n) => {
  let result = [];

  const combine = (temp, start) => {
    if (temp.length === n) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      combine(temp, i + 1);
      temp.pop();
    }
  };

  combine([], 0);
  return result;
};
console.log(
  getCombinations(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ],
    3
  )
);
