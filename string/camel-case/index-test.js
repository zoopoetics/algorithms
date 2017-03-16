import func from './index';

test('converts a string to camelCase', () => {
  expect(
    func('Helvetica pop-up prism cred pickled flexitarian'),
  ).toEqual(
    'helveticaPop-upPrismCredPickledFlexitarian',
  );
});
