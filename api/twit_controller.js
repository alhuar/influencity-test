const Twit = require('../models/twit');
const scrapper = require('../scrapper');

module.exports = {
  listAll(req, res, next){
    Twit.find({},{__v: 0}).exec((err, twits)=>{
      if (err) return next(err);
      res.status(200).json(twits);
    })
  },

  scrapProfile(req, res, next){
    const username = req.params.username;
    console.log(username);
    console.log(scrapper);
    scrapper(username)
      .then((result) => {
        const criteria = {}
        criteria.data =  {number_of_tweets, number_of_followers, number_of_following, bio, image_path} = result
        Twit.create(criteria, (err, twit)=>{
          if (err) return next(err);
          res.status(201).json(twit);
      })
    })
      .catch((err) => next(err))
  }
}
