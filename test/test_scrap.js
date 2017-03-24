const {scrapperMock} = require('../scrapper');
const correctProfile = require('./mocks/twitter_profile_mock');
const missingProfile = require('./mocks/no_twitter_profile');
const assert = require('assert');
const expectedOutput = { number_of_tweets: '181',
  number_of_following: '82',
  number_of_followers: '845',
  bio: 'We analyze the audience of millions of influencers from all over the world in order to develop #InfluencerMarketing campaigns in a powerful and effective way.',
  image_path: 'https://pbs.twimg.com/profile_images/783731458049466368/LzAizaDo_400x400.jpg' }

describe('Scrapper', () => {
  it('scrapps a twitter profile and returns specific data', ()=>{
    scrapperMock(correctProfile).then((scrappedProfile)=>{
       assert.deepEqual(scrappedProfile, expectedOutput);
    }).catch((err)=> console.log(err));
  });
  it('returns an error when username doesn´t exist', ()=>{
    scrapperMock(missingProfile).then((scrappedProfile)=>{
    }).catch((err)=> assert(err === "Wrong Username"));
  });
});
