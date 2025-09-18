function sliceTree(start, end) {
  let startElement = document.getElementById(start);
  let endElement = document.getElementById(end);

  if (!startElement || !endElement) return undefined;
  if (!startElement.contains(endElement)) return undefined;

  let result = [];

  let currentElement = endElement;

  while (currentElement !== startElement.parentNode) {
    result.unshift(currentElement.tagName);
    currentElement = currentElement.parentNode;
  }

  return result;
}

console.log(sliceTree(1, 4));