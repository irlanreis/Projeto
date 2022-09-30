const data = require('../data/zoo_data');

// const [{ id }] = data.species;

const getSpeciesByIds = (...ids) => ((ids.length === 0) ? []
  : data.species.filter(({ id }) => ids.includes(id)));
// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
