const mergeSort = (input) => {
  if (input.length < 2) {
    return input;
  }

  const length = input.length;
  const middle = Math.floor(length / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(right, left);
};

export default mergeSort;
