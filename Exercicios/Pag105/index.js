const numero = document.getElementById("numero")
const bottonParImpar = document.getElementById("bottonParImpar")
const resposta = document.getElementById("resposta")

bottonParImpar.addEventListener(()=>{
  if (+numero.value % 2 === 0) {
    resposta.value = "Par" + numero.value;
  } else {
    resposta.value = "Impar" + numero.value;
  }
})