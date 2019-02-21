import func from './index';

test('performs a quick sort on the passed values', () => {
  const values = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sorted = func(values);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
