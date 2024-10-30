const progress = document.querySelector('.progress');
const links = document.querySelector('.links');

progress.addEventListener('click', () => {
  console.log('Progress clicked!');
  progress.classList.toggle('on');

  if (progress.classList.contains('on')) {
    links.style.display = 'flex'; // Show links
  } else {
    links.style.display = 'none'; // Hide links if 'on' class is removed
  }
});
