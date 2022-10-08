const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalSchedule = (scheduleTarget) => species
  .find((specie) => specie.name === scheduleTarget).availability;

const daySchedule = (weekDay) => {
  const result = {};
  if (weekDay.toLowerCase() === 'monday') {
    result.officeHour = 'CLOSED';
    result.exhibition = 'The zoo will be closed!';
  } else {
    const day = hours[weekDay];
    result.officeHour = `Open from ${day.open}am until ${day.close}pm`;
    result.exhibition = [];
    species.forEach((specie) => {
      if (specie.availability.includes(weekDay)) {
        result.exhibition.push(specie.name);
      }
    });
  }
  return result;
};

const weekHours = (weekDay) => {
  const result = {};
  weekDay.forEach((day) => {
    result[day] = daySchedule(day);
  });
  return result;
};

const weekDays = Object.keys(hours);

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  } if (weekDays.includes(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = daySchedule(scheduleTarget);
    return result;
  }
  return weekHours(weekDays);
}

module.exports = getSchedule;
