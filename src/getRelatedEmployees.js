const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter(({ managers }) => managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
