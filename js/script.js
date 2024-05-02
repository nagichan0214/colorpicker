
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
  
  document.body.style.backgroundColor = color.value;
  // カラーコードを表示
  text.textContent = `カラーコード：${color.value}`;
}

color.addEventListener('input', colorBg);