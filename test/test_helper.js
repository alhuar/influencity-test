const mongoose = require('mongoose');

before((done) =>{
  mongoose.connect('mongodb://localhost/influencity_scrapper_test');
  mongoose.connection.once('open', ()=> done())
    .on('error', err =>{
      console.warn('Error', err);
    });
})

before((done)=>{
  const { twits } = mongoose.connection.collections;
  twits.drop()
    .then(()=> done())
    .catch(()=> done());
})
