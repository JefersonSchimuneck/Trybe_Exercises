const myRemove = require('./exercise_10_1_2');

describe('myRemove', () => {
  test('retorna novo array sem o item passado como parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('retorna o array correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('não altera array original', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('retorna mesmo array se ele não contém o número para remover', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});