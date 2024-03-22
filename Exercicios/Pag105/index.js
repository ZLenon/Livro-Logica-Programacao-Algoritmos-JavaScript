const numero = document.getElementById("numero")
const bottonParImpar = document.getElementById("bottonParImpar")
const resposta = document.getElementById("resposta")


bottonParImpar.addEventListener("click",()=>{
  if (+numero.value % 2 === 0) {
    resposta.innerText = numero.value + " é Par"
  } else {
    resposta.innerText = numero.value + " é impar"
  }
})