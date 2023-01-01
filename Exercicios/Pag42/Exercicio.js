/* Elaborar um programa que leia o valor de um jantar. Calcule e informe o
valor da taxa do garçom (10%) e o valor total a ser pago.
Valor do Jantar R$: 80.00
Taxa do Garçom R$: 8.00
Total a Pagar R$: 88.00 */

function taxa(valorJantar) {
  const result =  (valorJantar /100) * 10;
  return result + valorJantar;
};
console.log(taxa(80))