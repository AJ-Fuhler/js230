function makeBold(elem, func) {
  elem.style.fontWeight = 'bold';
  if (func) {
    func(elem);
  }
}