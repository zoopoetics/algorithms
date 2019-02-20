const factorial = (input) => {
  if (input < 2) {
    return 1;
  }
  return input * factorial(input - 1);
};

export default factorial;
