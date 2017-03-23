const assert  = require('assert');
const request = require('supertest');
const app     = require('../../app');
const Twit    = require('../../models/twit');

describe('Twit Controller', ()=>{
  it('scraps a twitter profile and saves it to the database', (done)=>{
    let username = "influencity"
    Twit.count().then((count)=>{
      request(app).get(`/api/user/${username}`).end((err, response)=>{
        Twit.count().then((newCount)=>{
          assert(response.status === 200);
          assert(count + 1 === newCount);
          done();
        })
      })
    })
  })
  it('doesn´t add a new record when it already exists', ()=>{
    let username = "influencity"
    Twit.count().then((count)=>{
      request(app).get(`/api/user/${username}`).end((err, response)=>{
        Twit.count().then((newCount)=>{
          assert(response.status === 200);
          assert(count === newCount);
        })
      })
    })
  })
})
