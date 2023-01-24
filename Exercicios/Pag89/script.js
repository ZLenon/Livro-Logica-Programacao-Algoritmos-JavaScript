const btnCalPesos = document.getElementById('calPesos');
const btnClearInput = document.getElementById('clearInput');

const nameInput = document.getElementById('hadleName');
const genderM = document.getElementById('genderMasculino');
const genderF = document.getElementById('genderFeminino');
const inAltura =  document.getElementById('altura');
const spanPeso = document.getElementById('pesoIdeal');

function calcPeso() {

  const name = nameInput.value;
  const masculino = genderM.checked;
  const feminino = genderF.checked;
  const altura = Number(inAltura.value);  

  if (masculino) {
    const peso = 22 * Math.pow(altura, 2);
    spanPeso.innerText = `${name} : Seu Peso ideal é ${peso.toFixed(2)} Kg`;
  } else {
    const peso = 21 * Math.pow(altura, 2);
    spanPeso.innerText = name + ': Seu Peso ideal é ' + peso.toFixed(2) + ' Kg';
  }
  if (name === '' || (masculino === false && feminino === false)) {
    alert('Por favor, informe um nome e selecione um sexo...');
    nameInput.focus(); 
  }
  if (altura === 0 || inNaN(altura)) {
    alert('Por favor, informe a altura corretamente...');
    inAltura.focus();
  }
}

function clearInputs() {
  genderM.checked = false;
  genderF.checked = false;
  inAltura.value = '';
  nameInput.value = '';
  spanPeso.innerText = '';
}

btnCalPesos.addEventListener('click', calcPeso );
btnClearInput.addEventListener('click', clearInputs);