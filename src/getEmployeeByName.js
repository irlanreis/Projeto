const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => ((employeeName === undefined)
  ? {} : employees.find((elem) => [elem.firstName, elem.lastName].includes(employeeName)));
console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
