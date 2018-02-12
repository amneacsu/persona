const persona = require('./lib');

const px = persona.person({
  count: 1,
  gender: persona.MALE,
  ageMin: 27,
  ageMax: 45,
});

console.log(px);
