const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, idade) {
  const animalName = species.find(({ name }) => name === animal).residents;
  return animalName.every(({ age }) => age >= idade);
}

module.exports = getAnimalsOlderThan;
