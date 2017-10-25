const names = require('./names');
const accounts = require('./accounts');

module.exports = {
  rand() {
    const name = names.rand();
    const username = accounts.username(name);

    return {
      firstname: name.firstname,
      lastname: name.lastname,
      username,
    };
  }
};
