// Only works with positive values so far
export default (...args) => {
  const inputs = Array.from(args);
  if (!inputs || !inputs.length) {
    return [];
  }

  // Get the length of the longest input array.
  const length = inputs
    .map((arr) => arr.length)
    .reduce((accumulator, current) => {
      return current > accumulator ? current : accumulator;
    }, 0);

  // Create a new array based on the established length,
  // and for each of its indexes, access the corresponding
  // indexes in each of the input arrays, summing the
  // numbers therein, if any.
  return Array.from({length}, (item, index) => {
    let sum = 0;
    for (const input of inputs) {
      const value = input[index];
      if (value > 0) {
        sum += value;
      }
    }
    return sum;
  });
};
