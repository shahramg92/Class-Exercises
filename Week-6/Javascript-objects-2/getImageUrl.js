// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
//
// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'
//


class Card {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

myCard = new Card(5, 'diamonds');
console.log(myCard.point);
console.log(myCard.suit);
