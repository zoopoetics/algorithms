export default (value, arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  const filtered = arr.filter((num) => num > value);
  return filtered.length ? Math.min(...filtered) : Math.min(...arr);
};
