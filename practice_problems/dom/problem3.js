function domTreeTracer(id) {
  let tree = [];
  let currentElement = document.getElementById(id);
  while (currentElement.tagName !== 'BODY') {
    tree.push([...currentElement.parentNode.children]
          .map(child => child.tagName));

    currentElement = currentElement.parentNode;
  }

  return tree;
}