var animals = [
{name: 'Fluffykins', species: 'rabbit' },
{name: 'Caro',       species: 'dog' },
{name: 'Hamilton',   species: 'dog' },
{name: 'Ursula',     species: 'fish' },
{name: 'Jimmy',      species: 'cat' },
]

var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})
console.log(names);

// You can also use arrow functions

var names = animals.map((animal) => animal.name)
console.log(names);
