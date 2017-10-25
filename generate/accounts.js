const _sample = require('lodash/sample');
const _shuffle = require('lodash/shuffle');

const np = ['Fl', 'fL', 'FL'];
const tp = ['y', 'Y', 'n'];

const rand = n => Math.round(Math.random() * n);

function username(name) {
  const firstname = name.firstname.toLowerCase().replace(/[\s-]/, '.');
  const lastname = name.lastname.toLowerCase().replace(/[\s-]/, '.');

  function xf(c) {
    switch (c) {
      case 'f': return firstname[0];
      case 'l': return lastname[0];
      case 'F': return firstname;
      case 'L': return lastname;
      case 'y': return 65 + rand(28);
      case 'Y': return 1965 + rand(28);
      case 'n': return rand(5126);
    }
  }

  return _sample(np).split('').concat(_sample(tp)).map(xf).join(_sample(['.', '']));
};

module.exports = {
  username,
}
