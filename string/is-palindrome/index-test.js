import func from './index';

test('checks if a string is a palindrome', () => {
  expect(func('A man, a plan, a canal. Panama')).toEqual(true);
  expect(func('not a palindrome')).toEqual(false);
});
