const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

// caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma.

// caso receba como parâmetro um OBJETO com a chave specie, deve retornar A QUANTIDADE de animais daquela espécie.

// caso receba como parâmetro um OBJETO com as CHAVES SPECIES e SEX, deve retornar a QUANTIDADE de animais daquela espécie, no sexo selecionado.

function countAnimals(animal) {
  if (animal === undefined) {
    const dadosAnimal = {};
    species.forEach((specie) => {
      dadosAnimal[specie.name] = specie
        .residents.length;
    });
    return dadosAnimal;
  }
  if (animal.sex !== undefined) {
    return species.find((element) => element.name === animal.specie)
      .residents.filter((el) => el.sex === animal.sex)
      .length;
  }
  return species.find((eleSpecie) => eleSpecie.name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'otters' }));
module.exports = countAnimals;
