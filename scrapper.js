const Xray = require("x-ray");
const xray = Xray();

module.exports = scrapper = (username) => {
  return new Promise((resolve, reject)=> {
  xray(`https://www.twitter.com/${username}`, {
    body_content: 'div.body-content h1',
    number_of_tweets: 'a[data-nav=tweets] span.ProfileNav-value',
    number_of_following: 'a[data-nav=following] span.ProfileNav-value',
    number_of_followers: 'a[data-nav=followers] span.ProfileNav-value',
    bio: 'p.ProfileHeaderCard-bio',
    image_path: 'img.ProfileAvatar-image@src'})((err, scrappedProfile)=> {
      if (err || scrappedProfile.body_content !== undefined ) reject(err);
      resolve(scrappedProfile)
    })
  })
}

// scrapper('djljlhdjhfdjhfsd').then((result) => console.log(result)).catch((err)=> console.log('no profile'))
