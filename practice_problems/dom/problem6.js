function nodeSwap(id1, id2) {
  let elem1 = document.getElementById(id1);
  let elem2 = document.getElementById(id2);

  if (!elem1 || !elem2) return undefined;
  if (elem1.contains(elem2) || elem2.contains(elem1)) return undefined;

  const elem1Clone = elem1.cloneNode(true);
  const elem2Clone = elem2.cloneNode(true);

  elem1.parentNode.replaceChild(elem2Clone, elem1);
  elem2.parentNode.replaceChild(elem1Clone, elem2);

  return true;
}

//