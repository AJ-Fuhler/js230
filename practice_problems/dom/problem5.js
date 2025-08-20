function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) {
    color(elements);
  }
}

function color(elements) {
  elements.forEach(el => {
    el.classList.add('generation-color');
  });
}

function getAllChildrenOf(parents) {
  return parents.flatMap(({children}) => [...children]);
}