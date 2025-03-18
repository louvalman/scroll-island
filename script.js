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
  // Calculate scroll percentage of viewport
  const maxScrollableDistance = document.body.scrollHeight - window.innerHeight;
  const currentScrollPosition = window.scrollY;
  const scrollPercentage = Math.min(
    (currentScrollPosition / maxScrollableDistance) * 100,
    100
  ).toFixed(0);

  // Display scroll percentage in percentageElement
  percentElement.textContent = `${scrollPercentage}%`;

  // Fill lines in display based on scroll percentage
  const maxWidths = [20, 20, 10];
  const totalLines = maxWidths.length;
  const progressPerLine = 100 / totalLines;

  const lines = document.querySelectorAll('.line-fill');
  lines.forEach((line, index) => {
    const startRange = index * progressPerLine;
    const endRange = startRange + progressPerLine;
    const maxWidth = maxWidths[index];

    if (scrollPercentage >= endRange) {
      // Fully filled
      line.setAttribute('width', maxWidth);
    } else if (scrollPercentage > startRange) {
      // Partially filled
      const fillPercentage =
        ((scrollPercentage - startRange) / progressPerLine) * maxWidth;
      line.setAttribute('width', fillPercentage);
    } else {
      // Not filled
      line.setAttribute('width', '0');
    }
  });
});
