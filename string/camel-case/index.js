export default (input) => {
  return input.split(' ')
    .map((word, index) => {
      // First word should begin with lower case letter:
      const caseFunc = index ? 'toUpperCase' : 'toLowerCase';
      return word.charAt(0)[caseFunc]() + word.slice(1);
    })
    .join('');
};
