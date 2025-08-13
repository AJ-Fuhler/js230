// document.addEventListener("DOMContentLoaded", () => {
//   let ul = document.querySelector('ul');
//   let [block1, block2, block3] = document.querySelectorAll('a');
//   let [article1, article2, article3] = document.querySelectorAll('article');

//   ul.addEventListener('click', event => {
//     event.preventDefault();
//     let targetElement = event.target;
//     if (targetElement.tagName === 'A') {
//       let blockValue = targetElement.dataset.block;
//       if (blockValue === block1.dataset.block) {
//         article1.classList.remove('hidden');
//         article2.classList.add('hidden');
//         article3.classList.add('hidden');
//       } else if (blockValue === block2.dataset.block) {
//         article2.classList.remove('hidden');
//         article1.classList.add('hidden');
//         article3.classList.add('hidden');
//       } else if (blockValue === block3.dataset.block) {
//         article3.classList.remove('hidden');
//         article1.classList.add('hidden');
//         article2.classList.add('hidden');
//       }
//     }
//   });
// });

// LS' cleaner approach:

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('a').forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();

      const blockName = tab.dataset.block;

      document.querySelectorAll('article').forEach(article => {
        article.style.display = article.dataset.block === blockName ? 'block' : 'none';
      })
    })
  })
})