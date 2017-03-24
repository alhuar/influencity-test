const assert   = require('assert');
const request  = require('supertest');
const app      = require('../app');
const Twit     = require('../models/twit');
const should   = require('should')
const time     = require('time');
const username = "influencity"


describe('Twit Controller', ()=>{
  it('scraps a twitter profile and saves it to the database', (done)=>{
    Twit.count().then((count)=>{
      request(app).get(`/api/user/${username}`).end(res =>{
        Twit.count().then((newCount)=>{
          assert(count + 1 === newCount);
          done();
        }).catch(err => done(err))
      })
    })
  });
  it('doesn´t add a new record when it already exists', (done)=>{
    Twit.count().then((count)=>{
      request(app).get(`/api/user/${username}`).end((err, response)=>{
        Twit.count().then((newCount)=>{
          assert(response.status === 200);
          assert(count  === newCount);
          done();
        }).catch(err => done(err))
      })
    })
  })
  it('updates the date when a record already exists', (done)=>{
    request(app).get(`/api/user/${username}`).end((err, response)=>{
      Twit.findOne({'data.username': username}).then((twitProfile)=>{
        const date = new time.Date().setTimezone(process.env.TIMEZONE).toString()
        assert(twitProfile.date === date );
        done();
      }).catch(err => done(err))
    })
  })

  it('returns a list of profiles scrapped', (done)=>{
    request(app).get('/api/log/list').end((err, res) =>{
      Twit.find({},{__v: 0}).then(twits =>{
        assert(res.status === 200);
        assert(res.body.length === 1)
        done();
      }).catch(err => done(err))
    })
  })
  it('returns an error message when the username doesn´t exist', (done)=>{
    request(app).get('/api/user/somenamethatiswrong').end((err, res) =>{
      assert(res.status === 404);
      assert(res.body.error === 'Wrong Username')
      assert(res.body.message === 'Sorry, no user matches the username provided');
      done();
    })
  })
});
