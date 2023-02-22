const dnaPairs = require('../01-dna-pairs/01-dna-pairs');

describe('dnaPairs', () => {
  test('when passed an empty string, return an empty array', () => {
    expect(dnaPairs("")).toEqual([]);
  });

  test('when passed the string "G", return a nested array of "G" and "C"', () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });

  test('when passed the string "A", return a nested array of "A" and "T"', () => {
    expect(dnaPairs("A")).toEqual([["A", "T"]]);
  });

  test('when passed the string "T", return a nested array of "T" and "A"', () => {
    expect(dnaPairs("T")).toEqual([["T", "A"]]);
  });

  test('when passed the string "C", return a nested array of "C" and "G"', () => {
    expect(dnaPairs("C")).toEqual([["C", "G"]]);
  });

  test('when passed the string "AG", return a nested array of "A" and "T", and "G" and "C"', () => {
    expect(dnaPairs("AG")).toEqual([["A", "T"], ["G", "C"]]);
  });

  test('when passed a multiple char string with a combination of "A", "G", "T" or "C", return a nested array of their pairs', () => {
    expect(dnaPairs("GA")).toEqual([["G", "C"], ["A", "T"]]);
    expect(dnaPairs("TC")).toEqual([["T", "A"], ["C", "G"]]);
    expect(dnaPairs("ATC")).toEqual([["A", "T"], ["T", "A"], ["C", "G"]]);
    expect(dnaPairs("ATAG")).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]]);
  });

  test('when passed any characters or combination of characters other than "A", "G", "T" or "C", return an empty array', () => {
    expect(dnaPairs("123")).toEqual([]);
    expect(dnaPairs("BDE")).toEqual([]);
    expect(dnaPairs("hello world")).toEqual([]);
    expect(dnaPairs("HOLA")).toEqual([]);
    expect(dnaPairs("Hola, ¿cómo estás?")).toEqual([]);
    expect(dnaPairs("H")).toEqual([]);
    expect(dnaPairs("z")).toEqual([]);
  });

  test('return a nested array of corresponding pairs, regardless of case', () => {
    expect(dnaPairs("ag")).toEqual([["A", "T"], ["G", "C"]]);
  });
});