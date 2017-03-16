import func from './index';

test('converts a string to PascalCase', () => {
  expect(
    func('Helvetica pop-up prism cred pickled flexitarian'),
  ).toEqual(
    'HelveticaPop-upPrismCredPickledFlexitarian',
  );
});
