const solution = (s) => {
  let pCount = 0;
  let yCount = 0;

  for (let c of s.toLowerCase()) {
    if (c === "p") {
      pCount += 1;
    }
    if (c === "y") {
      yCount += 1;
    }
  }
  return pCount === yCount;
};
