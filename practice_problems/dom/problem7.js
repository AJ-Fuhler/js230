/*

input: none
output: nested array

P:

requirements:

- for each node, add all children nodes
- recursively add all children nodes for each child into an array as well.

*/
function nodesToArr() {
  function recursive(parent) {
    const result = [parent.tagName, []];
    const children = [...parent.children];

    for (let child of children) {
      result[1].push(recursive(child));
    }

    return result;
    }

    return recursive(document.body);
  }
