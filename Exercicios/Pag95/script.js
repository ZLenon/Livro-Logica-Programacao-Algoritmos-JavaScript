/* Existe ainda uma forma abreviada para criar as instruções if.. else
conhecida como operador ternário (três operandos) ou operador
condicional. Ele consiste em realizar uma atribuição para uma variável
com base na análise de uma condição. Observe o exemplo a seguir: */

var categoria = idade >= 18 ? "Adulto" : "Juvenil";

/* A condição deve ser inserida após o sinal de atribuição (=). O primeiro
valor após a interrogação (?) é atribuído à variável caso a condição seja
verdadeira. E o segundo, após os “:”, caso a condição seja falsa. A
instrução anterior equivale à seguinte estrutura if... else. */

if (idade >= 18) {
var categoria = "Adulto";
} else {
var categoria = "Juvenil";
}
/* Em razão da sua simplicidade, o operador ternário é bastante utilizado e
está disponível na maioria das linguagens de programação da atualidade. */