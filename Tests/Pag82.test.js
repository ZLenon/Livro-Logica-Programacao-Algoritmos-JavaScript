//import { expect } from '@jest/globals';
const { expect } = require('@jest/globals')


describe('Pagina 82',()=>{
  it('tentanto se ha um inpult com o id Name',()=>{
    const nameAluno = document.getElementById('name');
    const notaUm = document.getElementById('nota1');
    const notaDois = document.getElementById('nota2');
    const botton = document.getElementById('btn');
    expect(nameAluno).toBe('title')
  });
});