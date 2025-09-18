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

// or

function colorGeneration(generation) {
  let currentGeneration = 1;
  let currentGenElements = [...document.body.children];

  while (currentGeneration < generation) {
    let children = [];
    currentGenElements.forEach(child => {
      children = children.concat([...child.children]);
    });

    currentGenElements = children;
    currentGeneration += 1;
  }

  currentGenElements.forEach(element => element.classList.add('generation-color'));
}