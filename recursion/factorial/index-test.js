import func from './index';

test('performs a factorial on the passed value', () => {
  expect(func(1)).toEqual(1);
  expect(func(2)).toEqual(2);
  expect(func(3)).toEqual(6);
  expect(func(10)).toEqual(3628800);
});
