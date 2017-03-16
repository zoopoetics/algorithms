export default (input) => {
  if (!input.length) {
    return [];
  }
  return input.reduce(
    (previous, current) => previous.concat(current),
    [],
  );
};
