function walk(node, callback) {
  callback(node);

  for (let childNode of node.childNodes) {
    walk(childNode, callback);
  }
}

function childNodes(id) {
  let parentNode = document.getElementById(String(id));
  let directChildrenCount = parentNode.childNodes.length;
  let totalDescendantCount = 0

  for (let childNode of parentNode.childNodes) {
    walk(childNode, node => {
      totalDescendantCount += 1;
    });
  }

  return [directChildrenCount, totalDescendantCount - directChildrenCount];
}