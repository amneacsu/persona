const names = require('./names');
const accounts = require('./accounts');

function zip() {
  return Math.random().toString().split().reverse().join('').substring(2, 8);
}

function person(options) {
  const name = names.rand(options.gender);
  const username = accounts.username(name);
  const email = accounts.email(username);

  return {
    firstname: name.firstname,
    lastname: name.lastname,
    username,
    email,
  };
}

function order(fields) {
  const out = {};

  for (let i in fields) {
    let val = '';

    switch (typeof fields[i]) {
      case 'string':
        val = fields[i];
        break;
      case 'function':
        val = fields[i]();
      default:
        break;
    }

    out[i] = val;
  }

  return out;
}

function run(options) {
  const px = person(options);

  return px;
}

module.exports = {
  zip,
  person,
  order,
  run,
};
