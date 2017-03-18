export default (input) => {
  // Regex pulls out letters and numbers only:
  const cleanedInput = input.toLowerCase().replace(/[\W_]/g, '');
  return cleanedInput.split('').reverse().join('') === cleanedInput;
};
