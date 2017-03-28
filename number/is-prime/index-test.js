import func from './index';

test('checks if a number is a prime', () => {
  const nums = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107,
  ];
  nums.forEach(num => {
    expect(func(num)).toEqual(true);
  });
});

test('checks if a number is a not prime', () => {
  const nums = [
    4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24,
    25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42,
  ];
  nums.forEach(num => {
    expect(func(num)).toEqual(false);
  });
});
