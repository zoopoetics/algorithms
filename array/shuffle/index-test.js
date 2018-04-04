import func from './index';

test('shuffles an array', () => {
  const input = Array.from({length: 10}, (datum, index) => index);
  const shuffled = func(input);
  expect(shuffled.length).toEqual(input.length);
  expect(shuffled.toString()).not.toEqual(input.toString());
});

test('returns an empty array if the input array is falsy', () => {
  expect(func()).toEqual([]);
  expect(func([])).toEqual([]);
});
