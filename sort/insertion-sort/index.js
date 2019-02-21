export default (input) => {
  for (let ii = 0; ii < input.length; ii++) {
    for (let jj = 0; jj < ii; jj++) {
      if (input[ii] < input[jj]) {
        const spliced = input.splice(ii, 1);
        input.splice(jj, 0, spliced[0]);
      }
    }
  }
  return input;
};
