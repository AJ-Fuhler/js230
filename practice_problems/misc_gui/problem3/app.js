let todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with Elphaba'},
];

document.addEventListener('DOMContentLoaded', () => {
  let ul = document.querySelector('ul');
  let overlay = document.querySelector('.overlay');
  let confirmPrompt = document.querySelector('.confirm-prompt');

  function createAndAddLi(todo) {
    let li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.textContent = todo.title;
    let btn = document.createElement('button');
    btn.classList.add('delete');
    li.appendChild(btn);
    ul.appendChild(li);
  }

  todoItems.forEach(createAndAddLi);

  document.querySelector('main').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON' && event.target.parentNode.tagName === 'LI') {
      event.preventDefault();
      let id = event.target.parentNode.dataset.id;
      let todoTitle = todoItems.find(todo => String(todo.id) === id).title;
      confirmPrompt.querySelector('p').textContent = `Are you sure you want to delete "${todoTitle}"?`;
      overlay.classList.add('show');
    } else if (event.target.tagName === 'BUTTON') {
      if (event.target.classList.contains('yes')) {
        let title = event.target.parentNode.parentNode.querySelector('p').textContent
          .match(/"[a-z]+"/gi)[0]
          .replace(/"/g, "");
        let id = todoItems.find(todo => todo.title === title).id;
        let liToDelete = ul.querySelector(`li[data-id="${id}"]`);
        liToDelete.remove();
        overlay.classList.remove('show');
      } else {
        overlay.classList.remove('show');
      }
    } else {
      overlay.classList.remove('show');
    }
  });
});