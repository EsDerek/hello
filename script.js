const countEl = document.querySelector('#count');
const countBtn = document.querySelector('#countBtn');
const themeBtn = document.querySelector('#themeBtn');
const nameEl = document.querySelector('#name');
const nameInput = document.querySelector('#nameInput');
const nameBtn = document.querySelector('#nameBtn');

let count = 0;

countBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

nameBtn.addEventListener('click', () => {
  const value = nameInput.value.trim();
  nameEl.textContent = value || '访客';
});

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    nameBtn.click();
  }
})