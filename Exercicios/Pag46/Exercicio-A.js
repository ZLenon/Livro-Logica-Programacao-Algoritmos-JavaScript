/* a) Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior. */

function infoNeighbor(num) {
  const ant = num - 1;
  const post = num + 1;
  return `Os visinhos de ${num} são ${ant} e ${post}`;
};
console.log(infoNeighbor(10));