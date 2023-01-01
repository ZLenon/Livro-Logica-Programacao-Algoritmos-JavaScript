/* Elaborar um programa que leia a duração de uma viagem em dias e
horas. Calcule e informe a duração total da viagem em número de horas.
Exemplo de dados de entrada e saída do programa (para uma viagem
que dura 2 dias + 5 horas).
Nº Dias: 2
Nº Horas: 5
Total de Horas: 53 */

function timeTravel(days,hours) {
  this.hours = days * 24;
  return hours + this.hours;
};
console.log(timeTravel(2,5));