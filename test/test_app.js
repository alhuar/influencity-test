const assert  = require('assert');
const request = require('supertest');
const app     = require('../app');

describe('The express app', ()=>{
  it('GET request to /api/log/list with empty database should return 204', (done)=>{
    request(app).get('/api/log/list').expect(204, done);
  })
});
