export default (input) => {
  const values = [...input];
  let isSorted = true;
  do {
    isSorted = true;
    for (let ii = 0; ii < values.length; ii++) {
      const current = values[ii];
      const next = values[ii + 1];
      if (current > next) {
        values[ii] = next;
        values[ii + 1] = current;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return values;
};
