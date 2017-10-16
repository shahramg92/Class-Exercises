// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
//

var people = [
  'Lyn',
  'Dom',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
];

console.log(people.sort(function sortPeople(a, b) {
  console.log(a, b);
  return a.length - b.length
}));
