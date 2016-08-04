const names = require('./names');

module.exports = {
  rand() {
    const name = names.rand();

    return {
      firstname: name.firstname,
      lastname: name.lastname,
      email: null,
    };
  }
};
