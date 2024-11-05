const progress = document.querySelector('.progress');
const links = document.querySelector('.links');
const percentElement = document.querySelector('.percentage');

progress.addEventListener('click', (event) => {
  event.stopPropagation();
  progress.classList.toggle('on');
});

window.addEventListener('click', (event) => {
  if (progress.classList.contains('on') && !progress.contains(event.target)) {
    progress.classList.remove('on');
  }
});

window.addEventListener('scroll', () => {
  const maxScrollableDistance = document.body.scrollHeight - window.innerHeight;
  const currentScrollPosition = window.scrollY;
  const scrollPercentage = Math.min(
    (currentScrollPosition / maxScrollableDistance) * 100,
    100
  ).toFixed(0);
  percentElement.textContent = `${scrollPercentage}%`;
});
