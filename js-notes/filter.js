var animals = [
{name: 'Fluffykins', species: 'rabbit' },
{name: 'Caro',       species: 'dog' },
{name: 'Hamilton',   species: 'dog' },
{name: 'Ursula',     species: 'fish' },
{name: 'Jimmy',      species: 'cat' },
]

var isDog = function(animal) {
  return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
console.log(dogs);
