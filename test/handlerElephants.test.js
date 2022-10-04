const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('testa se a função handlerElephants existe', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('testa se a função handlerElephants retorna undefined se nenhum parâmetro for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('testa se ao receber um parâmetro do tipo number a função handlerElephants retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(2)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Ao receber o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBe(true);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se ao receber um parâmetro inexistente a função retorna null', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });
});
