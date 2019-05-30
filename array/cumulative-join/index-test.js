import func from './index';

test('builds up a sequence of strings cumulatively', () => {
  const input = ['a', 'b', 'c', 'd'];
  const output = func(input);
  expect(output.length).toEqual(4);
  expect(output[0]).toEqual('a');
  expect(output[1]).toEqual('ab');
  expect(output[2]).toEqual('abc');
  expect(output[3]).toEqual('abcd');
});
