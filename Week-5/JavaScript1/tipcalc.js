// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%
//




function tipAmount(total, quality) {
  let tip = 0;
  if (quality == 'good') {
    tip = .2;
  }
  else if (quality == 'fair') {
    tip = .15;
  }
  else if (quality == 'bad') {
    tip = .1
  }
  else {
    return ('Error in quality provided')
  };

  tip_Amount = total * tip

  return tip_Amount;
};

console.log(tipAmount(100, 'bad'));
