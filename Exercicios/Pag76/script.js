/* Um supermercado está com uma promoção – Para aumentar suas vendas no
setor de higiene, cada etiqueta de produto deve exibir uma mensagem
anunciando 50% de desconto (para um item) na compra de três
unidades do produto. */
const produto = document.getElementById('produto');
const preco = document.getElementById('preco');

const button = document.getElementById('button');

const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');

button.addEventListener('click', () => {
  span1.textContent = produto.value;
  span2.textContent = Number(preco.value);
});