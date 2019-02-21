import func from './index';

test('performs an insertion sort on the passed values', () => {
  const values = [4, 1, 0];
  const sorted = func(values);
  expect(sorted).toEqual([0, 1, 4]);
});
