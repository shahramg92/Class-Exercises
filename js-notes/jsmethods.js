// Javascript Methods

var animals = [
{name: 'Fluffykins', species: 'rabbit' },
{name: 'Caro',       species: 'dog' },
{name: 'Hamilton',   species: 'dog' },
{name: 'Ursula',     species: 'fish' },
{name: 'Jimmy',      species: 'cat' },
]

// FOR LOOP

var dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}
console.log(dogs);


// FILTER METHOD

var isDog = function(animal) {
	return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
console.log(dogs);

// MAP METHOD

var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})
console.log(names);

You can also use arrow functions

var names = animals.map((animal) => animal.name)
