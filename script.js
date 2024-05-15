// script.js
const buttonContainer = document.getElementById('buttonContainer');

const names = ['名前1', '名前2', '名前3', '名前4', '名前5', '名前6', '名前7', '名前8', '名前9', '名前10', '名前11', '名前12', '名前13', '名前14', '名前15', '名前16', '名前17', '名前18', '名前19', '名前20', '名前21', '名前22', '名前23', '名前24', '名前25', '名前26', '名前27', '名前28', '名前29', '名前30', '名前31', '名前32'];

names.forEach((name, index) => {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('buttonWrapper');

  const nameLabel = document.createElement('span');
  nameLabel.textContent = name;
  buttonWrapper.appendChild(nameLabel);

  const button = document.createElement('button');
  button.classList.add('statusBtn');
  button.textContent = '外出';
  buttonWrapper.appendChild(button);

  buttonContainer.appendChild(buttonWrapper);

  const statusBtn = buttonWrapper.querySelector('.statusBtn');
  statusBtn.addEventListener('click', () => {
    isAtHome[index] = !isAtHome[index];
    localStorage.setItem('isAtHome', JSON.stringify(isAtHome));
    updateButtonStates();
  });
});

const statusBtns = document.querySelectorAll('.statusBtn');
let isAtHome = JSON.parse(localStorage.getItem('isAtHome')) || Array.from({ length: 32 }, () => false);

updateButtonStates();

function updateButtonStates() {
  statusBtns.forEach((btn, index) => {
    if (isAtHome[index]) {
      btn.textContent = '在宅';
      btn.classList.remove('red');
      btn.classList.add('green');
    } else {
      btn.textContent = '外出';
      btn.classList.remove('green');
      btn.classList.add('red');
    }
  });
}
