const calculateDivisors = require('../03-calculate-divisors/03-calculate-divisors');

describe('calculateDivisors', () => {
  
  test('when passed 0, return 0', () => {
    expect(calculateDivisors(0)).toBe(0);
  });

  test('when passed 1, return 0', () => {
    expect(calculateDivisors(1)).toBe(0);
  });

  test('when passed 5, return 3', () => {
    expect(calculateDivisors(5)).toBe(3);
  });

  test('when passed 6, return 8', () => {
    expect(calculateDivisors(6)).toBe(8);
  });

  test('when passed 10, return 23', () => {
    expect(calculateDivisors(10)).toBe(23);
  });

  test('when passed 12, return 33', () => {
    expect(calculateDivisors(12)).toBe(33);
  });
});