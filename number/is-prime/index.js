export default (input) => {
  /*
  A prime number is a number greater than 1 that has
  no positive divisors other than 1 and itself.
  */
  let divisor = 2;
  while (input > divisor) {
    if (input % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
};
