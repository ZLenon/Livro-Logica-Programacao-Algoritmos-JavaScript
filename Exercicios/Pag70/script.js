/* Elaborar um programa para uma revenda de veículos. O programa deve
ler modelo e preço do veículo. Apresentar como resposta o valor da entrada
(50%) e o saldo em 12x. */
const veiculo = document.getElementById("veiculo");
const preco = document.getElementById("preco");
const btn = document.getElementById("btn");

const outPromocao =  document.getElementById("promocao");

const outEntrada = document.getElementById("entrada");

const outParcelado = document.getElementById("parcelado");

const veiculoIndefinido = veiculo.value.length >= 1;
const precoZERO = preco.value.length >= 1;
btn.addEventListener('click', ()=> {
    outPromocao.innerText = "Promoção " + veiculo.value;
    outEntrada.innerHTML = "Entrada de " + ((preco.value / 100) * 50).toFixed(2);    
    outParcelado.textContent = "12x de R$ " + (preco.value / 12).toFixed(2) ;  
});