document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});

document.addEventListener('keydown', event => {
  let colorLetter = event.key;
  let color;
  switch (colorLetter) {
    case 'b':
      color = 'blue';
      break;
    case 'g':
      color = 'green';
      break;
    case 'r':
      color = 'red';
      break;
  }

  let stripes = [...document.querySelector('.x').children];
  stripes.forEach(stripe => {
    stripe.style.background = color;
  });
});