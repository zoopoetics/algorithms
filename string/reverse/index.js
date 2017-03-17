export default input => input
  .split('')
  .map((letter, index) => input[input.length - (index + 1)])
  .join('');
