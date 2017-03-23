const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) =>{
  mongoose.connect('mongodb://localhost/influencity_scrapper_test');
  mongoose.connection.once('open', ()=> done())
    .on('error', err =>{
      console.warn('Error', err);
    });
})

beforeEach((done)=>{
  const { twits } = mongoose.connection.collections;

  twits.drop()
    .then(()=> done())
    .catch(()=> done());
})
