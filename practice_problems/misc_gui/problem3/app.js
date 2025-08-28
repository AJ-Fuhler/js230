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
  let contextMenu = document.querySelector('.context-menu');

  function createAndAddLi(todo) {
    let li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.textContent = todo.title;
    let btn = document.createElement('button');
    btn.classList.add('delete');
    li.appendChild(btn);
    ul.appendChild(li);
  }

  function updateListItems(id) {
    ul.innerHTML = '';
    todoItems = todoItems.filter(todo => todo.id !== Number(id));
    todoItems.forEach(createAndAddLi);
  }

  function showPrompt(todo) {
    let confirmParagraph = confirmPrompt.querySelector('p');
    confirmParagraph.textContent = `Are you sure you want to delete "${todo.title}"?`;
    confirmParagraph.setAttribute('data-id', todo.id);
    overlay.classList.add('show');
  }

  function hidePrompt() {
    overlay.classList.remove('show');
  }

  function createContextContent(id) {
    let ul = document.createElement('ul');
    let editLi = document.createElement('li');
    let showDetailsLi = document.createElement('li');
    let deleteLi = document.createElement('li');

    editLi.textContent = 'Edit Todo';
    showDetailsLi.textContent = 'Show Details';
    deleteLi.textContent = 'Delete';

    deleteLi.setAttribute('data-id', id);
    deleteLi.classList.add('delete')

    ul.appendChild(editLi);
    ul.appendChild(showDetailsLi);
    ul.appendChild(deleteLi);

    contextMenu.appendChild(ul);
  }

  function showContextMenu() {
    contextMenu.classList.add('show');
  }

  function hideContextMenu() {
    contextMenu.classList.remove('show');
  }

  todoItems.forEach(createAndAddLi);

  document.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON' && event.target.parentNode.tagName === 'LI') {
      let todo = todoItems
        .find(todo => String(todo.id) === event.target.parentNode.dataset.id);
      showPrompt(todo);

    } else if (event.target.tagName === 'BUTTON') {
      if (event.target.classList.contains('yes')) {
        let id = event.target.parentNode.parentNode.querySelector('p').dataset.id;
        updateListItems(id);
        hidePrompt();
      } else {
        hidePrompt();
      }
    } else if (event.target.classList.contains('overlay')) {
      hidePrompt();
    } else if (contextMenu.classList.contains('show')) {
      hideContextMenu();
    }
  });

  ul.addEventListener('contextmenu', event => {
    if (event.target.tagName !== 'UL') {
      event.preventDefault();
      let clickedLi = event.target.tagName === 'LI' ? event.target : event.target.parentNode;

      if (contextMenu.childElementCount === 0) {
        createContextContent(clickedLi.dataset.id);
      } else {
        contextMenu.querySelector('.delete')
          .setAttribute('data-id', clickedLi.dataset.id);
      }

      contextMenu.style.top = event.clientY + 'px';
      contextMenu.style.left = event.clientX + 'px';
      showContextMenu();
    }
  });


  contextMenu.addEventListener('click', event => {
    event.stopPropagation();
    if (event.target.classList.contains('delete')) {
      let todo = todoItems.find(todo => String(todo.id) === event.target.dataset.id);
      hideContextMenu();
      showPrompt(todo);
    }
  });
});