// script.js
const buttonContainer = document.getElementById('buttonContainer');

const names =['加藤 涼太', '堀田 悠人', '前田 和也', '菊池 良翼', '増田 啓太', '増田 遥斗', '栗下 優大', '松本 侑大', '三浦 壮太', '榊原 拓真', '三澤 遥斗', '武藤 倫', '榊原 丈了', '宮崎 正寛', '元木 悠人', '指方 拓仁', '亀田 蒼空', '森田 大地', '今泉 虹希', '足立 翔哉', '矢治 優輝', '田上 大斗', '津崎 壮達', '山内 涼生', '守田 拓未', '古屋 凱斗', '山口 侑貴', '田副 澄海登', '西村 柾哉', '山崎 天翔', '山田 瑠生', '山本 一磨','脇野 羚央' ,'鷲見 侑飛'];

let isAtHome = JSON.parse(localStorage.getItem('isAtHome')) || Array.from({ length: 34 }, () => false);

function createButton(name, index) {
  const button = document.createElement('button');
  button.classList.add('statusBtn');
  button.textContent = `${name}: 外出`;
  buttonContainer.appendChild(button);

  button.addEventListener('click', () => {
    isAtHome[index] = !isAtHome[index];
    updateButtonState(button, index);
    saveData();
  });

  return button;
}

function updateButtonState(button, index) {
  if (isAtHome[index]) {
    button.textContent = `${names[index]}: 在宅`;
    button.classList.remove('red');
    button.classList.add('green');
  } else {
    button.textContent = `${names[index]}: 外出`;
    button.classList.remove('green');
    button.classList.add('red');
  }
}

function saveData() {
  localStorage.setItem('isAtHome', JSON.stringify(isAtHome));
}

// ボタンを作成し、状態を更新
names.forEach((name, index) => {
  const button = createButton(name, index);
  updateButtonState(button, index);
});

// ローカルストレージから状態を読み込んでボタンを更新
window.addEventListener('DOMContentLoaded', () => {
  names.forEach((name, index) => {
    updateButtonState(buttonContainer.children[index], index);
  });
});
