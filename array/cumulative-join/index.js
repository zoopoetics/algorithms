export default (input = []) => {
  const output = [];

  let n = 0;
  while (n < input.length) {
    n++;
    output.push([...input].splice(0, n).join(''));
  }

  return output;
};
