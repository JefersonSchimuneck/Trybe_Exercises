const myFizzBuzz = require('./exercise_10_1_4');

describe('myFizzBuzz', () => {
  test('retorna `fizzbuzz` se o número for divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('retorna `fizz` se o número for divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('retorna `buzz` se o número for divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('retorna o número se não for divisível por 3 ou 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  test('retorna falso se não for passado um numero', () => {
    expect(myFizzBuzz('number')).toBeFalsy();
  });
});
