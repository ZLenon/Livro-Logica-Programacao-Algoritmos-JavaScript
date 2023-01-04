/* Retorna o valor absoluto de um número, ou seja, se o valor for
negativo, ele será convertido para positivo. Se positivo, o valor
Math.abs(num) permanece o mesmo.
Exemplo: Math.abs(-3) => 3 */
const a = Math.abs(-99);
console.log(`Metodo ABS: ${a}`);

/* Arredonda o valor para cima. Dessa forma, se o valor possuir
decimais, retorna o próximo número inteiro do valor analisado.
Exemplo: Math.ceil(4.2) => 5*/
const b = Math.ceil(4.2);
console.log(`Metodo CEIL: ${b}`);

/* Arredonda o valor para baixo, retornando a parte inteira do
Exemplo: Math.floor(7.9) => 7*/
const c = Math.floor(7.9);
console.log(`Metodo FLOOR: ${c}`);

/* Retorna a base elevada ao expoente.
Exemplo: Math.pow(3, 2) => 9 */
const d = Math.pow(3, 2);
console.log(`Metodo POW: ${d}`);

/* Retorna um número aleatório entre 0 e 1, com várias casas
decimais. O número aleatório possível inicia em 0 e vai até um
valor inferior a 1.Exemplo: Math.random() => 0.6501314074022906 */
const e = Math.random();
console.log(`Metodo RANDOM: ${e}`);

/* Arredonda o valor para o inteiro mais próximo. A partir de 0.5 na
parte fracionária, o valor é arredondado para cima. Anterior a 0.5,
Math.round(num é arredondado para baixo.)
Exemplo: Math.round(2.7) => 3*/
const f = Math.round(2.7);
console.log(`Metodo ROUND: ${f}`);

/* Retorna a raiz quadrada do número (square root).
Math.sqrt(num) Exemplo: Math.sqrt(16) => 4*/
const g = Math.sqrt(16);
console.log(`Metodo SQRT: ${g}`);
