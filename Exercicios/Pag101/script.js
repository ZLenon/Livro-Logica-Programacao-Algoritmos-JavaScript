const valorSaque =  document.getElementById('valueOut');
const btnExibition = document.getElementById('btnExibition');
const btnSaque = document.getElementById('saque');

let note100 = document.getElementById('cem');
let note50 = document.getElementById('cinquenta');
let note10 = document.getElementById('dez');

let check100 = document.getElementById('check100');
let check50 = document.getElementById('check50');
let check10 = document.getElementById('check10');

let valorSacado = document.getElementById('sacado');

const resolveSaque = () => {
  const value = +valorSaque.value;

  note100.innerHTML =  (value / 100);
  note50.innerHTML = (value / 50);
  note10.innerHTML = (value / 10);

  btnSaque.addEventListener('click', ()=> {
    if (check100.checked) {  
      valorSaque.value = ""     
      return valorSacado.innerHTML = `ja pode sacar suas ${note100.innerHTML} notas de 100`;
    } if (check50.checked) {
      valorSaque.value = ""  
      return valorSacado.innerHTML = `ja pode sacar suas ${note50.innerHTML} notas de 50`;
    } if (check10.checked) {
      valorSaque.value = ""  
      return valorSacado.innerHTML = `ja pode sacar suas ${note10.innerHTML} notas de 10`;
    }
  });
 
};


btnExibition.addEventListener('click', resolveSaque);