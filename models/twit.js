const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const time       = require('time');
const date       = new time.Date();

const TwitSchema = new Schema({
  date: {type: String, default: new time.Date().setTimezone('Europe/Amsterdam').toString()},
  data: {
    username: String,
    number_of_followers: String,
    number_of_following: String,
    image_path: String,
    bio: {type: String, default: "No bio"},
    number_of_tweets: String,
  }
})

// , {timestamps: {createdAt: "date", updatedAt: false }})

const Twit = mongoose.model('Twit', TwitSchema);
module.exports = Twit;
