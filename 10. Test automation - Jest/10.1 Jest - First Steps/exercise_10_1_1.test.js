const sum = require('./exercise_10_1_1');

describe('sum', () => {
    test('4 + 5 = 9', () => {
      expect(sum(4, 5)).toBe(9);
    });

    test('0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
  
    test('erro quando recebe string', () => {
      expect(() => { sum(4, '5') }).toThrow();
    });
  
    test('mensagem de erro = "parameters must be numbers"', () => {
      expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
  });
