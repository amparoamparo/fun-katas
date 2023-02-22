/*

Get certain data from a tweet

The challenge is to implement a function which returns an object containing data from a given tweet.

We want easy access to the following data:

- The length of the tweet
- The amount of hashtags (e.g. #awesomeNorthcoders) in the tweet as well as an array of them
- The amount of mentions (e.g. @northcoders) in the tweet as well as an array of them

We only want to return unique hashtags and handles mentioned.

Examples
--------

You can use these examples to start building up your test suite:

getTweetData("My awesome tweet");
should return --> { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }

getTweetData("My awesome tweet to @northcoders");
should return --> { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 }

getTweetData("My awesome tweet about #coding");
should return --> { tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }

getTweetData("My awesome tweet about #coding to @northcoders");
should return --> { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 }

getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
should return --> { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 }

*/

// Please do not change the name of this function
function getTweetData(tweet) {
    // create an object with all the properties needed, initialised empty or at 0
    const tweetData = {
        tags: [],
        mentions: [],
        tagCount: 0,
        mentionCount: 0,
        length: 0 };
    
    // add length to object
    tweetData.length = tweet.length;
    
    // regex to find tags
    const tagFormat = /#\w*/g;

    // check if there are tags in string
    if (tagFormat.test(tweet)) {
        // find all tags and store them in a new variable
        const allTags = tweet.match(tagFormat);
        // create a new set to store unique tags
        const uniqueTags = [...new Set(allTags)];
        // add unique tags to object.tags
        tweetData.tags = uniqueTags;
        // add amount of unique tags to object.tagCount
        tweetData.tagCount = tweetData.tags.length;
    }
    
    // regex to find mentions
    const mentionFormat = /@\w*/g;

    // check if there are mentions in string
    if (mentionFormat.test(tweet)) {
        // find all tags and store them in a new variable
        const allMentions = tweet.match(mentionFormat);
        // create a new set to store unique tags
        const uniqueMentions = [...new Set(allMentions)];
        // find mentions and add them to object.mentions
        tweetData.mentions = uniqueMentions;
        // add amount of mentions to object.mentionCount
        tweetData.mentionCount = tweetData.mentions.length;
    }
    
    return tweetData;
};

module.exports = getTweetData;
