/* Elaborar um programa para uma lan house de um aeroporto – O programa deve
ler o valor de cada 15 minutos de uso de um computador e o tempo de
uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
sabendo que as frações extras de 15 minutos devem ser cobradas de
forma integral. */

const dinheiro = document.getElementById("dinheiro");
const minutos = document.getElementById('minutos');

const botao = document.getElementById('botao');
const outPag = document.getElementById('outPag');

botao.addEventListener('click', () => {
  const din = Number(dinheiro.value);
  const min = Number(minutos.value);

  const a = min / 15;

  const valorPagar = (a * din).toFixed(2);

  outPag.textContent = 'Valor a Pagar R$:' + valorPagar;
});