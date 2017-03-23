const Xray = require("x-ray");
const xray = Xray();

scrapper = (username) => {
  return new Promise((resolve, reject)=> {
  xray(`https://www.twitter.com/${username}`, {
    number_of_tweets: 'a[data-nav=tweets] span.ProfileNav-value',
    number_of_following: 'a[data-nav=following] span.ProfileNav-value',
    number_of_followers: 'a[data-nav=followers] span.ProfileNav-value',
    bio: 'p.ProfileHeaderCard-bio',
    image_path: 'img.ProfileAvatar-image@src'})((err, scrappedProfile)=> {
      if (err) reject(err);
      resolve(scrappedProfile)
    })
  })
}

module.exports = scrapper;



    // const criteria = {}
    // criteria.data =  {number_of_tweets, number_of_followers, number_of_following, bio, image_path} = result
    //
    // Twit.create(criteria, (err, twit)=>{
    //   if (err) {console.log(err); return}
    //   console.log(twit);
//     })
//   })
// }
