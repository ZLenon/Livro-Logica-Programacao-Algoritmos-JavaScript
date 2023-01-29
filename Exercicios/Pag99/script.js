const inRoot = document.getElementById('inRoot');
const actionRoot = document.getElementById('actionRoot');
const outRoot = document.getElementById('outRoot');
/* Testar valores como 49,144,256 */
function resolveRoot() {
  let rootNum = Number(inRoot.value);

  if (rootNum === 0 || isNaN(rootNum)) {
    alert('Informe um número válido...');
    inRoot.focus();
    return;
  }
  const root = Math.sqrt(rootNum);

  if (root == Math.floor(root)) {
    outRoot.innerText = 'Raiz ' + root;
  } else {
    outRoot.innerText = 'Não há raiz exata para ' + rootNum;
  }
};

actionRoot.addEventListener('click', resolveRoot);