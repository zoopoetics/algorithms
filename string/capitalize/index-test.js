import func from './index';

test('capitalizes the first letter of the passed string', () => {
  expect(func('narwhal')).toEqual('Narwhal');
});

test('returns an empty string for invalid input', () => {
  expect(func()).toEqual('');
  expect(func(null)).toEqual('');
  expect(func('')).toEqual('');
});
