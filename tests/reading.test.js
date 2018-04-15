const assert = require('assert');
const User = require('../src/user');
describe('Creating records', () => {
   
   let joe;
    beforeEach((doneCb)=>{
        joe = new User({ name: 'joe' });
        joe.save().then(() => {
            assert(!joe.isNew)
            doneCb();
        });
    })

    it('should return list of user with name joe', (doneCb) => {
        User.find({name:'joe'}).then((users)=>{
            assert(users[0]._id.toString() === joe._id.toString());
            doneCb();
        });
    });

    it('should a user with name joe', (doneCb) => {
        User.findOne({_id: joe._id}).then((user)=>{
            console.log(user.name);
            assert(user.name === 'joe');
            doneCb();
        });
    });
})