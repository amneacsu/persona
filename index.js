const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');


const fs = require('fs');
const csv = require('csv');

const persona = require('./lib');

const getPeople = (count) => {
  const people = [];

  while (people.length < count) {
    const px = persona.person({
      gender: persona.MALE,
      ageMin: 27,
      ageMax: 45,
    });


    const i = people.findIndex((p) => p.email === px.email);

    if (i !== -1) {
      console.log(`duplicate e-mail ${px.email}, skipping...`);
    } else {
      people.push(px);
    }

    if (people.length % 2000 === 0) {
      console.log(`${people.length} so far`);
    }
  }

  return people;
};

const people = getPeople(500000);

const header = ['firstName', 'lastName', 'email'];

const csvFromArrayOfObjects = convertArrayToCSV(people, {
  header,
  separator: ','
});

console.log(csvFromArrayOfObjects);

fs.writeFileSync('./500000-people.csv', csvFromArrayOfObjects);
