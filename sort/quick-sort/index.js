const quickSort = (input) => {
  if (input.length <= 1) {
    return input;
  }

  const pivot = input.pop();
  const left = [];
  const right = [];

  for (let ii = 0; ii < input.length; ii++) {
    if (input[ii] < pivot) {
      left.push(input[ii]);
    } else {
      right.push(input[ii]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
