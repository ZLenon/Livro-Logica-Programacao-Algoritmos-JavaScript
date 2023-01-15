/* Fazer a leitura do nome e das notas de um aluno, apresenta a 
média e uma mensagem para o aluno: “Parabéns ... Você foi aprovado(a)!” 
ou, então, “Ops... Você foi reprovado(a).”. A situação de aprovado 
ou reprovado é de lida pela média das notas, que deve ser 7.0 ou 
superior para aprovação. Caso a nota seja inferior a 7.0, a mensagem
 indicando a reprovação deve ser exibida. Também faremos nesse exemplo 
 a aplicação de um estilo na mensagemque indica a situação do aluno. 
 A mensagem de aprovação é exibida em azul e de reprovação, em vermelho.*/
const nameAluno = document.getElementById('name');
const notaUm = document.getElementById('nota1');
const notaDois = document.getElementById('nota2');
const botton = document.getElementById('btn');

const mediaResponse = document.getElementById('mediaNota');
const response = document.getElementById('resposta');

botton.addEventListener('click', ()=>{
  nameResponse = nameAluno.value;
  let media = (Number(notaUm.value)+Number(notaDois.value)) / 2;
  if (media >= 7) {
    mediaResponse.style.color = 'blue';
    response.style.color = 'blue';
    mediaResponse.textContent = 'Media das Notas: ' + media;
    response.textContent =  'Parabens ' +nameResponse+ ' Voçê foi aprovado(a)'; 
  }
  if (media < 7) {
    mediaResponse.style.color = 'red';
    response.style.color = 'red'
    mediaResponse.textContent = 'Media das Notas: ' + media;
    response.textContent = 'Ops ' +nameResponse+ ' Você foi reprovado(a).';
  }
});

module.exports = {
  nameAluno,
  nameResponse,
  response,
  notaUm,
  notaDois,
  botton,
};
