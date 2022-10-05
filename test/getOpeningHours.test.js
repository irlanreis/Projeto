const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função existe', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa o retorno da função quando sem argumento', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });
  //   it('Testa o retorno da função para os argumentos Monday e 09:00-AM', () => {
  //     expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  //   });
  const zooClosed = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  // const msgErro = 'The day must be valid. Example: Monday';
  it('Testa se quando a função não tem parâmetro retorna um objeto', () => {
    expect(getOpeningHours()).toStrictEqual(zooClosed);
  });
  it('Testa o retorno da função para os parâmetros Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Thu e 09:00-AM deve lança a exceção dayValid', () => {
    const dayValid = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error(dayValid));
  });
  it('Para os argumentos Friday e 09:00-ZM deve lança a exceção frydayMsg', () => {
    const fridayMsg = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error(fridayMsg));
  });
  it('Para os argumentos Saturday e C9:00-AM deve lança a exceção saturdayMsg', () => {
    const saturdayMsg = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error(saturdayMsg));
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lança a exceção sundayMsg', () => {
    const sundayMsg = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error(sundayMsg));
  });
  it('Para os argumentos Monday 13:00-AM testa se lança a exceção mondayMsg', () => {
    const mondayMsg = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error(mondayMsg));
  });
  it('Para os argumentos Tuesday e 09:60-AM testa se lança a exceção tuesdayMsg', () => {
    const tuesdayMsg = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error(tuesdayMsg));
  });
  it('Verifica se qualquer horario de segunda o zoo está closed', () => {
    const zooClosedDay = 'The zoo is closed';
    expect(getOpeningHours('monday', '09:00-PM')).toStrictEqual(zooClosedDay);
  });
  it('verifica se para os argumentos Wednesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const zooFechado = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooFechado);
  });
});
