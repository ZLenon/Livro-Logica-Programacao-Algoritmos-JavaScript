/* c) Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x. */

function pagamento(valor) {
  const desconto = (valor / 100) *10;
  const vista = valor / desconto;
  const prestacao = valor / 3;
  return `O valor a vista é ${vista.toFixed(2)} o valor em 3X é de ${prestacao.toFixed(2)}`;
};
console.log(pagamento(100));