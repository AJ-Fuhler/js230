function getElementsByTagName(tagName) {
  let matches = [];
  (function recursiveElementFinder(node) {
    if (node.nodeName === tagName) {
      matches.push(node);
    }

    let nodes = node.childNodes;
    for (let node of nodes) {
      recursiveElementFinder(node);
    }
  })(document);

  return matches;
}

getElementsByTagName('P').forEach(paragraph => paragraph.classList.add('article-text'));