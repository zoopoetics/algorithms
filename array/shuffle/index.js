export default (input) => {
  if (!input || !input.length) {
    return [];
  }
  return input.map(item => [Math.random(), item])
    .sort((item1, item2) => item1[0] - item2[0])
    .map(item => item[1]);
};
