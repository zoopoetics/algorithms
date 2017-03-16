import func from './index';

test('converts a string to snake_case', () => {
  expect(
    func('Helvetica pop-up prism cred pickled flexitarian'),
  ).toEqual(
    'helvetica_pop-up_prism_cred_pickled_flexitarian',
  );
});
