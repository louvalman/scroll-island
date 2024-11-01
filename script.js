const progress = document.querySelector('.progress');
const links = document.querySelector('.links');
const percentElement = document.querySelector('.percentage');

progress.addEventListener('click', () => {
  progress.classList.toggle('on');
});

window.addEventListener('click', (event) => {
  if (progress.classList.contains('on') && !progress.contains(event.target)) {
    progress.classList.remove('on');
  }
});

window.onscroll = () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const y = window.scrollY;
  const res = ((y / totalHeight) * 100).toFixed(0);
  percentElement.textContent = `${Math.min(Number(res), 100)}%`;
  /*   progressEl.style.setProperty("--t", `${Number(res) / 100}turn`); */
};
