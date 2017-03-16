import func from './index';

test('converts a string to kebab-case', () => {
  expect(
    func('Helvetica pop-up prism cred pickled flexitarian'),
  ).toEqual(
    'helvetica-pop-up-prism-cred-pickled-flexitarian',
  );
});
