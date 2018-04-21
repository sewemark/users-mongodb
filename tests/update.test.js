const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let anna;

  beforeEach((doneCb) => {
    anna = new User({ name: 'Anna' });
    anna.save()
      .then(() => doneCb());
  });

  function assertName(operation, doneCb) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        doneCb();
      });
  }

  it('instance type using set n save', (doneCb) => {
    anna.set('name', 'Alex');
    assertName(anna.save(), doneCb);
  });

  it('A model instance can update', (doneCb) => {
    assertName(anna.update({ name: 'Alex' }), doneCb);
  });

  it('A model class can update', (doneCb) => {
    assertName(
      User.update({ name: 'Anna' }, { name: 'Alex' }),
      doneCb
    );
  });

  it('A model class can update one record', (doneCb) => {
    assertName(
      User.findOneAndUpdate({ name: 'Anna' }, { name: 'Alex' }),
      doneCb
    );
  });

  it('A model class can find a record with an Id and update', (doneCb) => {
    assertName(
      User.findByIdAndUpdate(anna._id, { name: 'Alex' }),
      doneCb
    );
  })

  it('A user can have their postcount incremented by 1', (doneCb) => {
    User.update({ name: 'Anna' }, { $inc: { likes: 10 } })
      .then(() => User.findOne({ name: 'Anna' }))
      .then((user) => {
        assert(user.likes === 10);
        doneCb();
      });
  });
});