//import { expect, jest, test } from '@jest/globals';
const { expect } = require('@jest/globals')
const calcDouble = require('../Exercicios/Pag40/Exercicio');

describe('Pagina 40', () => {
  test('testando se é uma fução', () => {
    expect(typeof calcDouble).toBe("function");
  });
  it('testando o retorno', () => {

    expect(calcDouble(10)).toEqual(20);
  });
});