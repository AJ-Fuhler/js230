function arrayToNodes(parentChildrenArr) {
  let parent = document.createElement(parentChildrenArr[0]);
  for (let child of parentChildrenArr[1]) {
    child = arrayToNodes(child);
    parent.appendChild(child);
  }

  return parent;
}