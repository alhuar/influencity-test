const Xray = require("x-ray");
const xray = Xray();

scrapper = (username) => {
  return new Promise((resolve, reject)=> {
  xray(process.env.TWITTER_URL + username, {
    body_content: 'div.body-content h1',
    number_of_tweets: 'a[data-nav=tweets] span.ProfileNav-value',
    number_of_following: 'a[data-nav=following] span.ProfileNav-value',
    number_of_followers: 'a[data-nav=followers] span.ProfileNav-value',
    bio: 'p.ProfileHeaderCard-bio',
    image_path: 'img.ProfileAvatar-image@src'})((err, scrappedProfile)=> {
      if (err) reject(err);
      if (scrappedProfile.body_content !== undefined ) reject("Wrong Username");
      resolve(scrappedProfile)
    })
  })
}

scrapperMock = (html) => {
  return new Promise((resolve, reject)=> {
  xray(html, {
    body_content: 'div.body-content h1',
    number_of_tweets: 'a[data-nav=tweets] span.ProfileNav-value',
    number_of_following: 'a[data-nav=following] span.ProfileNav-value',
    number_of_followers: 'a[data-nav=followers] span.ProfileNav-value',
    bio: 'p.ProfileHeaderCard-bio',
    image_path: 'img.ProfileAvatar-image@src'})((err, scrappedProfile)=> {
      if (err) reject(err);
      if (scrappedProfile.body_content !== undefined ) reject("Wrong Username");
      resolve(scrappedProfile);
    })
  })
}
module.exports = {scrapper, scrapperMock }
