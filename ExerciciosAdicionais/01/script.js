/* Lista de Tarefas Projeto da trybe */

const tarefa = document.getElementById('texto-tarefas');
const btnCriar = document.getElementById('criar-tarefa');
const listaOl = document.getElementById('lista-tarefas');

btnCriar.addEventListener('click', ()=> {  
  let listaLi = document.createElement('li');
  let texto = document.createTextNode(tarefa.value);
  tarefa.value = '';
  listaOl.appendChild(listaLi);
  listaLi.appendChild(texto);
 
   
});