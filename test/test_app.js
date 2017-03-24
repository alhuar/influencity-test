const assert  = require('assert');
const request = require('supertest');
const app     = require('../app');

describe('The express app', ()=>{
  it('GET request to /api/log/list with empty database should return 200', (done)=>{
    request(app).get('/api/log/list').end((err, res)=>{
      assert(res.status === 200);
      assert(res.body.message === 'No info yet, perform a query to populate database.')
      done();
    })
  })
  it('returns error message when no route matched', (done)=>{
    request(app).get('/apisdf/logss/list').expect(404).then(res => {
      assert(res.body.message === "Not found");
      done();
    });
  })
});
