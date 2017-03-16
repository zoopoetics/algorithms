import func from './index';

test('flattens an array of arrays', () => {
  expect(func([
    [0, 1],
    [2, 3],
    [4, 5],
  ])).toEqual([0, 1, 2, 3, 4, 5]);
});

test('returns an empty array if the input array has no sub-arrays', () => {
  expect(func([])).toEqual([]);
});
