const assert  = require('assert');
const request = require('supertest');
const app     = require('../app');

describe('The express app', ()=>{
  it('handles a GET request to /api/log/list', (done)=>{
    request(app).get('/api/log/list').end((err, response)=>{
      assert(response.status === 200);
      done();
    })
  })
});
