const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(ids) {
  const getPeople = employees.filter(({ id }) => id === ids)[0].responsibleFor;
  const theAnimal = species.find(({ id }) => id === getPeople[0]).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(theAnimal);
}

module.exports = getOldestFromFirstSpecies;
