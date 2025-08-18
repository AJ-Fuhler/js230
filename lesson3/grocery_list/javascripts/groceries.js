document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let groceryList = document.querySelector('#grocery-list');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let itemName = form.querySelector('#name').value;
    if (!itemName) return;

    let quantity = form.querySelector('#quantity').value || '1';

    let listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${itemName}`;

    groceryList.appendChild(listItem);
    form.reset();
  });
});