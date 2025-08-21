document.querySelector('main').addEventListener('click', event => {
  event.stopPropagation();
  alert(event.target.tagName);
});