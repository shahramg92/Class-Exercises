// Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

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

  setTimeout(lazyGreet(lazy)){
    console.log('Yo ' + $(lazy.name) + '! from ' + $(this.name) + '.');
  }
}

var p1 = new Person('Shahram');
var p2 = new Person('Sofia');

console.log(p1.lazyGreet(p2));
