const classToAnimal = {
  'Classifications': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
}

const animalToClass = {
  'Animals': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#selection-filters');
  let classifications = form.querySelector('#animal-classifications');
  let animals = form.querySelector('#animals');
  let clear = form.querySelector('#clear');
  let classificationOptions = classifications.querySelectorAll('option');
  let animalOptions = animals.querySelectorAll('option');

  function setOptions({options}, filters) {
    options.length = 0;
    filters.forEach((value, index) => {
      options[index] = new Option(value);
    });
  }


  classifications.addEventListener('change', event => {
    let value = event.currentTarget.value;
    let matchingAnimals = classToAnimal[value];
    setOptions(animals, matchingAnimals);
  });

  animals.addEventListener('change', event => {
    let value = event.currentTarget.value;
    let matchingClassifications = animalToClass[value];
    setOptions(classifications, matchingClassifications);
  });

  clear.addEventListener('click', event => {
    event.preventDefault();

    setOptions(animals, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);
    setOptions(classifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
    form.reset();
  })
});