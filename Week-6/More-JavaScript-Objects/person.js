// // Given this Person type:
//
// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };
//
// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };
//
// var p1 = new Person('Me');
// var p2 = new Person('You');
//
// p1.createGreeting(p2);
//
// Rewrite the above type as a class

class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }

  greet(other) {
    console.log(this.createGreeting(other));
  }
}

var p1 = new Person('Shahram');
var p2 = new Person('Sofia');

console.log(p1.createGreeting(p2));
console.log(p1.addFriend(p2));
console.log(p1.friends)
console.log(p1.createGreeting(p1.friends[0]));
