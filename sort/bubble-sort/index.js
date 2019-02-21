export default (input) => {
  let isSorted = true;
  do {
    isSorted = true;
    for (let ii = 0; ii < input.length; ii++) {
      const current = input[ii];
      const next = input[ii + 1];
      if (current > next) {
        input[ii] = next;
        input[ii + 1] = current;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return input;
};
