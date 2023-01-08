/* Uma farmácia está com uma promoção – Na compra de duas unidades de um
mesmo medicamento, o cliente recebe como desconto os centavos do
valor total. Elaborar um programa que leia descrição e preço de um
medicamento. Informe o valor do produto na promoção.*/

const medicamento = document.getElementById("medicamento");
const preco = document.getElementById("preco");

const botao = document.getElementById("botao");

const outPromocao =  document.getElementById("outPromocao");
const outValor = document.getElementById("outValor");

botao.addEventListener("click" , ()=>{  
    const duasUND =  (Number.parseInt(preco.value) * 2);
    const desconto = ((Number(preco.value) * 2) % 1).toFixed(2);
    
    outPromocao.innerText = "Promoção de " + medicamento.value;
    outValor.innerText = `Leve 2 por apenas R$${duasUND},00 com desconto de ${desconto}`;

});