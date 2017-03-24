const Twit            = require('../models/twit');
const profileScrapper = require('../scrapper');
const time            = require('time')

module.exports = {
  listAll(req, res, next){
    Twit.find({},{__v: 0})
    .then((twits) => {
      if (twits.length === 0)
        return res.status(204).json({message: 'No info yet, perform a query to populate database.'});
      return res.status(200).json(twits)
    })
    .catch((err) => {throw "Error listing tweets: " + err.message} );
  },

  scrapProfile(req, res, next){
    const username = req.params.username;
    profileScrapper(username)
    .then((result) => {
        const criteria = {
          date: new time.Date().setTimezone(process.env.TIMEZONE).toString(),
          data: { username: username}
        };
        Object.assign(criteria.data, result);
        const options = {upsert: true, new: true, setDefaultsOnInsert: true};
        return Twit.findOneAndUpdate({'data.username': username}, criteria, options);
    })
    .then((twit) => {res.status(200).json(twit)})
    .catch((err) => res.status(404).json({
      message:'Sorry, no user matches the username provided',
      error: err.message
    }))
  }
}