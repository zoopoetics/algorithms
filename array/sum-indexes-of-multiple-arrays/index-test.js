import func from './index';

test('sums the indexes of multiple arrays', () => {
  const length = 10;
  const input1 = Array.from({length}, (item, index) => index);
  const input2 = Array.from({length}, (item, index) => index + index * 2);
  const output = func(input1, input2);
  expect(output.length).toEqual(10);
  expect(output).toEqual([0, 4, 8, 12, 16, 20, 24, 28, 32, 36]);
});

test('sums the indexes of multiple arrays of unequal length', () => {
  const input1 = Array.from({length: 10}, (item, index) => index);
  const input2 = Array.from({length: 12}, (item, index) => index + index * 2);
  const output = func(input1, input2);
  expect(output.length).toEqual(12);
  expect(output).toEqual([0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 30, 33]);
});

test('sums the indexes of multiple arrays with invalid indexes', () => {
  const input1 = Array.from({length: 10}, (item, index) => index);
  input1[2] = null;

  const input2 = Array.from({length: 12}, (item, index) => index + index * 2);
  input2[5] = undefined;

  const output = func(input1, input2);
  expect(output.length).toEqual(12);
  expect(output).toEqual([0, 4, 6, 12, 16, 5, 24, 28, 32, 36, 30, 33]);
});

test('return an empty array for invalid input', () => {
  expect(func()).toEqual([]);
  expect(func([])).toEqual([]);
});
