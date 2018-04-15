const mongoose = require('mongoose');
mongoose.Promise= global.Promise;

before(()=> {
mongoose.connect('mongodb://localhost/users');
mongoose.connection
            .once('open', ()=>{})
            .on('error', (error) => {
                console.warn('Warning', error);
            });
});

beforeEach((doneCb)=>{
    mongoose.connection.collections.users.drop(()=>{
      doneCb();
    });
});