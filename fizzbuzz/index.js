export default () => {
  return Array.from({length: 100}, (item, index) => index + 1).map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    }

    if (num % 3 === 0) {
      return 'Fizz';
    }

    if (num % 5 === 0) {
      return 'Buzz';
    }

    return num;
  });
};
