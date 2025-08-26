document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');

  function toggleTooltipClass(element) {
    element.classList.toggle('tooltip');
  }
  images.forEach(image => {
    let timeoutId;

    image.addEventListener('mouseenter', event => {
      let figcaption = event.target.parentNode.querySelector('figcaption');
      figcaption.style.display = 'block';
      timeoutId = setTimeout(toggleTooltipClass, 2000, figcaption);
    });
    image.addEventListener('mouseleave', event => {
      clearTimeout(timeoutId);
      event.target.parentNode.querySelector('figcaption').classList.remove('tooltip');
    })
  });
});