/*

Get certain data from a tweet

The challenge is to implement a function which returns an object containing data from a given tweet.

We want easy access to the following data:

- The length of the tweet
- The amount of hashtags (e.g. #awesomeNorthcoders) in the tweet as well as an array of them
- The amount of mentions (e.g. @northcoders) in the tweet as well as an array of them

We only want to return unique hashtags and handles mentioned.

*/

function getTweetData(tweet) {
    const tweetData = {
        tags: [],
        mentions: [],
        tagCount: 0,
        mentionCount: 0,
        length: 0 };
    
    tweetData.length = tweet.length;

    const tagFormat = /#\w*/g;

    if (tagFormat.test(tweet)) {
        const allTags = tweet.match(tagFormat);
        const uniqueTags = [...new Set(allTags)];
        tweetData.tags = uniqueTags;
        tweetData.tagCount = tweetData.tags.length;
    }
    
    const mentionFormat = /@\w*/g;
    
    if (mentionFormat.test(tweet)) {
        const allMentions = tweet.match(mentionFormat);
        const uniqueMentions = [...new Set(allMentions)];
        tweetData.mentions = uniqueMentions;
        tweetData.mentionCount = tweetData.mentions.length;
    }
    
    return tweetData;
};

module.exports = getTweetData;
