// Given the following objects:
//
// One
//
// Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.
//
// Two
//
// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

mom.showInfo = function() {
  console.log(`Name: ${this.firstName} ${this.lastName}\nEye Color: ${this.eyeColor}\nHair Color: ${this.hairColor}\n`);
};
mom.showInfo();
daughter.showInfo();
