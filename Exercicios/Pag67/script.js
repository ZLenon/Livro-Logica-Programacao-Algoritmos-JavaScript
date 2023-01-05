/* Elaborar um programa para uma Vídeo Locadora, que leia o título e a
duração de um lme em minutos. Exiba o título do lme e converta a
duração para horas e minutos */
const titulo =  document.getElementById("Titulo");
const duracao = document.getElementById("Duracao");
const botao = document.getElementById("btnConversor");

const spanTitulo = document.getElementById("nomeTitulo");
const spanHoras = document.getElementById("horasConvertidas");

botao.addEventListener('click', ()=>{  
  if (titulo.value.length === 0 || duracao.value.length === 0) {
    const msg1 = 'Insira um Titulo';
    const msg2 = 'Insira o tempo do filme';
    spanTitulo.innerText = msg1;
    spanHoras.innerText = msg2;    
  } else {
    spanTitulo.innerText = titulo.value;
    
    const horas = Math.floor(duracao.value / 60); 
    const minutos = (duracao.value % 60);
    
    spanHoras.innerText = `Horas ${horas} : ${minutos} min.`;
  }
});  