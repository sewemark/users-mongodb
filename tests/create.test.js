const assert = require('assert');
const User = require('../src/user');
describe('Creating records', () => {
    it('should save a user', (doneCb) => {
        var joe = new User({ name: 'joe' });
        joe.save().then(() => {
            assert(!joe.isNew)
            doneCb();
        });
    });
})