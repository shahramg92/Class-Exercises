// Hand constructor
//
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:
//
// > var myHand = new Hand()
// > myHand.addCard(new Card(5, 'diamonds'))
// > myHand.addCard(new Card(13, 'spades'))
// > myHand.getPoints()
// 15
// Implement a Hand constructor that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects.

Class addCard {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

var myHand = new Hand();
