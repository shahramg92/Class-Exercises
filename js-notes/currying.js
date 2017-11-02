// Currying is when a function doesn't take all of its arguments upfront. Instead,
// it wants you to give it the first argument and then the function returns another function which you are supposed to call with the 2nd argument, which in turn returns a new funciton which you are supposed to call with the third argument and so on until all the arguments have been provided. Then, the final value is returned

let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon('Sofia')('tiny')('lightning'));

// OR

let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'));

Another Example

let dragons = [
  {name : 'fluffykins', element: 'lightning'},
  {name : 'noomi',      element: 'lightning'},
  {name : 'karo',       element: 'fire'},
  {name : 'doomer',     element: 'timewarp'}
]

let hasElement =
  (element, obj) => obj.element === element;

let lightningDragons =
  dragons.filter(x => hasElement('lightning', x));

console.log(lightningDragons);
