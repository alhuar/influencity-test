# Influencity Test

* Twitter scraping json API for storing user information in MongoDB

#### Instructions:

* Download this repo
* Run "npm install"
* Run "npm start" to start the application
* Run "npm run test" to execute the test suite
____
#### How to use:
This API provides two different endpoints to scrap a twitter profile or query the database to get all the information stored.
____

#### Endpoints:
 * **Scraping**: *{path}/api/user/{username}*

 ```json
 {
   "_id": "58d530d32ad6426beec9876f",
   "data": {
     "image_path": "https://pbs.twimg.com/profile_images/783731458049466368/LzAizaDo_400x400.jpg",
     "number_of_followers": "845",
     "number_of_following": "82",
     "number_of_tweets": "181",
     "username": "influencity",
     "bio": "We analyze the audience of millions of influencers from all over the world in order to develop #InfluencerMarketing campaigns in a powerful and effective way."
   },
   "date": "Fri Mar 24 2017 15:44:35 GMT+0100 (CET)"
 }
 ```
 * **Get all logs**: *{path}/api/log/list*
 ```json
  [{
   "_id": "58d530d32ad6426beec9876f",
   "data": {
     "image_path": "https://pbs.twimg.com/profile_images/783731458049466368/LzAizaDo_400x400.jpg",
     "number_of_followers": "845",
     "number_of_following": "82",
     "number_of_tweets": "181",
     "username": "influencity",
     "bio": "We analyze the audience of millions of influencers from all over the world in order to develop #InfluencerMarketing campaigns in a powerful and effective way."
   },
   "date": "Fri Mar 24 2017 15:44:35 GMT+0100 (CET)"
 },
 {
    "_id": "58d57a8e2ad6426beec998ea",
    "data": {
      "image_path": "https://pbs.twimg.com/profile_images/466256995675160576/4L9u4Au__400x400.png",
      "number_of_followers": "10.4K",
      "number_of_following": "101",
      "number_of_tweets": "3,648",
      "username": "ironhack",
      "bio": "Ironhack is an international coding bootcamp that believes the best way to learn how to do something, is by actually doing it."
    },
    "date": "Fri Mar 24 2017 20:59:10 GMT+0100 (CET)"
  }]
 ```
____
 #### Deploy:
* Heroku version [here](https://influencity-test.herokuapp.com/api/log/list)

#### Requirements

Node, Express, MongoDB, Mongoose, Mocha, Supertest
