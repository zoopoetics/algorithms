export default (input) => {
  if (input && input.length) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  return '';
};
