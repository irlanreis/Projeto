const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const object = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => ({
  child: entrants.filter(({ age }) => age < 18).length,
  adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
  senior: entrants.filter(({ age }) => age >= 50).length,
});
// { child: 3, adult: 2, senior: 1 }
const calculateEntry = (entrants = 0) => {
  if (entrants === undefined || Object.entries(entrants).length === 0) { return 0; }
  const visitantes = countEntrants(entrants);
  return visitantes.child * prices.child
  + visitantes.adult * prices.adult
  + visitantes.senior * prices.senior;
};
// console.log(calculateEntry(object));
module.exports = { calculateEntry, countEntrants };
