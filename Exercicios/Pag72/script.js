/* Elaborar um programa para um restaurante que leia o preço por kg e o
consumo (em gramas) de um cliente. Exiba o valor a ser pago, conforme */

const inQuilo =  document.getElementById("inQuilo");

const inConsumo = document.getElementById("inConsumo");

const btCalcular = document.getElementById("btCalcular");

const outValor = document.getElementById("outValor");

btCalcular.addEventListener("click", ()=>{
  const valueKg = Number(inQuilo.value);
  const valueGramas = Number(inConsumo.value);
  const valor = (valueKg / 1000) * valueGramas;

  outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
});