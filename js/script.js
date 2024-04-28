
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  // カラーコードを表示
  text.textContent = `カラーコード：${color.value}`;
}

color.addEventListener('input', colorBg);