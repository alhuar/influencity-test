const Twit            = require('../models/twit');
const profileScrapper = require('../scrapper');
const time            = require('time')

module.exports = {
  listAll(req, res, next){
    Twit.find({},{__v: 0}).exec((err, twits)=>{
      if (err) return next(err);
      //  TODO implement no twits availables
      if (twits.length === 0) {
        res.send("<h1>No info yet, perform a query to populate database</h1>");
        return
    }
      res.status(200).json(twits);
    })
  },

  scrapProfile(req, res, next){
    const username = req.params.username;
    profileScrapper(username)
      .then((result) => {
        const date = new time.Date();
        const criteria = {date: date.setTimezone('Europe/Amsterdam').toString()}
        criteria.data = {number_of_tweets, number_of_followers, number_of_following, bio, image_path} = result
        criteria.data.username = username
        const options = {upsert: true, new: true, setDefaultsOnInsert: true}
        Twit.findOneAndUpdate({'data.username': username}, criteria, options, (err, twit)=>{
          if (err) return next(err);
          res.status(200).json(twit);
      })
    })
      .catch((err) => next(err))
  }
}
