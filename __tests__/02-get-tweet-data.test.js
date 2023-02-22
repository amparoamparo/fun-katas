const getTweetData = require('../02-get-tweet-data/02-get-tweet-data');

describe('getTweetData', () => {
  test('when passed an empty string, return an object which properties have no values', () => {
    expect(getTweetData("")).toEqual({tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0});
  });

  test('when passed a string with no tags nor mentions, return object with its length property reflecting the string\'s length', () => {
    expect(getTweetData("hello world")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 11 });
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
    expect(getTweetData("a")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 1 });
  });

  test('when passed a string with one tag, return object with tag and tagCount properties updated', () => {
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });
  });

  test('when passed a string with more than one tag, return object with tag and tagCount properties updated', () => {
    expect(getTweetData("My awesome tweet about #coding, specifically about #javascript")).toEqual({ tags: ['#coding', '#javascript'], mentions: [], tagCount: 2, mentionCount: 0, length: 62 });
  });

  test('when passed a string with one mention, return object with mention and mentionCount properties updated', () => {
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });
  });

  test('when passed a string with one tag and one mention, return object with tag, tagCount, mention and mentionCount properties updated', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
  });

  test('when passed a string with one or more tags and one or more mentions, return object with tag, tagCount, mention and mentionCount properties updated', () => {
    expect(getTweetData("I am #coding with @northcoders. I love #javascript and @Google")).toEqual({ tags: ['#coding', '#javascript'], mentions: ['@northcoders', '@Google'], tagCount: 2, mentionCount: 2, length: 62 });
  });

  test('when pass a string with repeated tags or mentions, only count them once', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
    expect(getTweetData("I am #coding with @northcoders. I love #coding with #javascript at @northcoders. I also #love @Google!")).toEqual({ tags: ['#coding', '#javascript', '#love'], mentions: ['@northcoders', '@Google'], tagCount: 3, mentionCount: 2, length: 102 });
  });
});