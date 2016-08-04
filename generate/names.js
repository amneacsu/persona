const fs = require('fs');
const _sample = require('lodash/sample');
const _flatten = require('lodash/flatten');
const _reverse = require('lodash/reverse');

const db = {
  firstname: fs.readFileSync('data/firstname.txt').toString().split('\n'),
  lastname: fs.readFileSync('data/lastname.txt').toString().split('\n'),
};

const fib = [8, 5, 3, 2, 1];
const distribute = (p, i) =>  Array(fib[i]).fill(p);

const patterns = [
  'F,L',
  'F F,L',
  'F-F,L',
  'F,F',
  'F,L-L',
];
const pool = _flatten(patterns.map(distribute));

function fromPattern(pattern) {
  const name = pattern.replace(/[FL]/g, function(t) {
    switch (t) {
      case 'F': return _sample(db.firstname);
      case 'L': return _sample(db.lastname);
    }
  });

  return {
    firstname: name.split(',')[0],
    lastname: name.split(',')[1],
  };
}

const dirtyflip = p => _sample([0, 0, 1]) ? p.split('').reverse().join('') : p;

module.exports = {
  rand() {
    return fromPattern(dirtyflip(_sample(pool)));
  }
};
