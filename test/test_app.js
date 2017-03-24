const assert  = require('assert');
const request = require('supertest');
const app     = require('../app');

describe('The express app', ()=>{
  it('GET request to /api/log/list with empty database should return 204', (done)=>{
    request(app).get('/api/log/list').expect(204, done);
  })
  it('returns error message when no route matched', (done)=>{
    request(app).get('/apisdf/logss/list').expect(404).then(res => {
      assert(res.body.message === "Not found");
      done();
    });
  })
});
