import func from './index';

test('returns the next highest number in an array', () => {
  const arr = Array.from({length: 10}, (datum, index) => index);
  expect(func(-1, arr)).toEqual(0);
  expect(func(5, arr)).toEqual(6);
});

test('returns the lowest number in the array if value is too high to be found', () => {
  const arr = Array.from({length: 10}, (datum, index) => index);
  expect(func(100, arr)).toEqual(0);
});

test('returns null for invalid input', () => {
  expect(func(100)).toEqual(null);
  expect(func(100, [])).toEqual(null);
})
