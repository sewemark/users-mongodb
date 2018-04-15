const assert = require('assert');
const User = require('../src/user');

describe('Deleting user', () => {

    let kyle;
    beforeEach((doneCb) => {
        kyle = new User({ name: 'kyle' });
        kyle.save().then(() => {
            doneCb();
        })
    })

    it('shoudl remove a user', (doneCb) => {

        kyle.remove().then(() => User.findOne({ name: 'kyle' }))
            .then((user) => {
                assert(!user)
                doneCb();
            }).catch(err => {
                console.log(err);
                doneCb();
            })
    });

    it('shoudl remove a user', (doneCb) => {
        User.remove({name:'kyle'})
            .then(() => User.findOne({ name: 'kyle' }))
            .then((user) => {
                assert(!user)
                doneCb();
            }).catch(err => {
                console.log(err);
                doneCb();
            })
    });

    it('shoudl remove a user', (doneCb) => {
        User.findByIdAndRemove(kyle._id)
            .then(() => User.findOne({ name: 'kyle' }))
            .then((user) => {
                assert(!user)
                doneCb();
            }).catch(err => {
                console.log(err);
                doneCb();
            })
    });
});