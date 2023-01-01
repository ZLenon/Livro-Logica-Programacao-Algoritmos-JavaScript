/* b) Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente. */

function contPizza(valor, numClientes) {
  const valorIndividual = (valor/ numClientes).toFixed(2);
  return `A pizza custa ${valor}, cada pessoa ira pagar ${valorIndividual}`;
};
console.log(contPizza(50,3));