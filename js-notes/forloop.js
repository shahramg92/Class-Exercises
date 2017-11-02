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
