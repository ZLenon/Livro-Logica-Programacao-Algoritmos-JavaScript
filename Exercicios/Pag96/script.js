const inHour = document.getElementById('inHour');
const convertBtn = document.getElementById('convertBtn');
const outHour = document.getElementById('outHour');

const convertHour = () =>{
  let hour = Number(inHour.value);
  
  if (inHour.value === '' || isNaN(hour)) {
    alert('Informe a hora no Brasil Corretamente')
    inHour.value = '';
    inHour.focus();
    return;
  }
  output = hour + 5;
  console.log(output);
  if (output >= 24) {   
    outHour.textContent = `Hora na França ${(output % 24).toFixed(2)}h 🇫🇷`; 
    return;   
  }
  return outHour.innerText = `Hora na França ${output}h 🇫🇷`;

};

convertBtn.addEventListener('click', convertHour);
