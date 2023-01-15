//import { expect } from '@jest/globals';
const { expect } = require('@jest/globals')
const { botton, addEventListener } = require('../Exercicios/Pag82/script');

describe('Pagina 82',()=>{
  it('tentanto se ha um inpult com o id Name',()=>{

    expect(addEventListener).toBe('QualquerCoisa')
  });
});