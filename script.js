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
  const maxScrollableDistance = document.body.scrollHeight - window.innerHeight;
  const currentScrollPosition = window.scrollY;
  const scrollPercentage = (
    (currentScrollPosition / maxScrollableDistance) *
    100
  ).toFixed(0);

  percentElement.textContent = `${Math.min(Number(scrollPercentage), 100)}%`;

  /* progressEl.style.setProperty("--rotation", `${Number(scrollPercentage) / 100}turn`); */
};
